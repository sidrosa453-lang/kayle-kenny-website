#!/usr/bin/env node
// Automated QA for a built site.   node tools/check.mjs [--dir docs]
// Exits non-zero when any ERROR is found. Warnings do not fail the run.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const a = process.argv.slice(2);
const get = (k, d) => { const i = a.indexOf(k); return i >= 0 ? a[i + 1] : d; };
const DIR = path.resolve(get('--dir', path.join(ROOT, 'docs')));
const site = JSON.parse(fs.readFileSync(path.join(ROOT, 'site.config.json'), 'utf8'));
const SITE = String(site.siteUrl).replace(/\/+$/, '');
const DEF = site.defaultLanguage || 'en';
const LANG_CODES = { en: ['en', 'ltr'], fr: ['fr', 'ltr'], ar: ['ar', 'rtl'], zh: ['zh-Hans', 'ltr'] };

const errors = [];
const warnings = [];
const err = (f, m) => errors.push(`${f}: ${m}`);
const wrn = (f, m) => warnings.push(`${f}: ${m}`);

if (!fs.existsSync(DIR)) { console.error(`No such directory: ${DIR}`); process.exit(2); }

function walk(d, out = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p, out); else out.push(path.relative(DIR, p).split(path.sep).join('/'));
  }
  return out;
}
const all = walk(DIR);
const fileSet = new Set(all);
const htmlFiles = all.filter((f) => f.endsWith('.html'));

const ENT = { amp: '&', lt: '<', gt: '>', quot: '"', '#39': "'", apos: "'", nbsp: ' ' };
const decode = (s) => String(s).replace(/&(#x[0-9a-f]+|#\d+|\w+);/gi, (m, e) => {
  if (e[0] === '#') return String.fromCodePoint(e[1] === 'x' || e[1] === 'X' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10));
  return ENT[e] ?? m;
});
const attr = (tag, name) => { const m = tag.match(new RegExp(`\\s${name}="([^"]*)"`, 'i')); return m ? decode(m[1]) : null; };
const tags = (h, name) => h.match(new RegExp(`<${name}\\b[^>]*>`, 'gi')) || [];

// URL path of a page file: 'a/b/index.html' -> '/a/b/', '404.html' -> '/404.html'
const urlPathOf = (f) => '/' + f.replace(/(^|\/)index\.html$/, '$1');
// Resolve a URL path to an output file, or null.
function fileFor(urlPath) {
  let p = decodeURIComponent(urlPath.split('#')[0].split('?')[0]).replace(/^\/+/, '');
  if (p === '' || p.endsWith('/')) p += 'index.html';
  if (fileSet.has(p)) return p;
  if (fileSet.has(p + '/index.html')) return p + '/index.html';
  return null;
}
function resolveHref(href, pageFile) {
  if (href.startsWith(SITE + '/') || href === SITE) return { local: new URL(href).pathname, abs: true };
  if (/^(https?:|mailto:|tel:|data:|javascript:|\/\/)/i.test(href)) return null;
  const base = new URL('http://x' + urlPathOf(pageFile));
  const u = new URL(href, base);
  return { local: u.pathname, hash: u.hash };
}

// Display width: CJK / full-width characters count double (Google and Baidu truncate
// Chinese snippets at roughly half the Latin character count).
const WIDE = /[\u2E80-\uA4CF\uAC00-\uD7A3\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFF60\uFFE0-\uFFE6]/;
const width = (s) => [...String(s || '')].reduce((n, ch) => n + (WIDE.test(ch) ? 2 : 1), 0);
const langOfPath = (f) => { const p = urlPathOf(f).split('/')[1]; return LANG_CODES[p] && p !== DEF ? p : DEF; };

const pages = {};
const ids = {};
const forbiddenRe = /\b(undefined|NaN|null)\b|\{\{|\}\}|\bTODO\b|\blorem\b/i;

for (const f of htmlFiles) {
  const h = fs.readFileSync(path.join(DIR, f), 'utf8');
  const htmlTag = (h.match(/<html\b[^>]*>/i) || [''])[0];
  const title = decode((h.match(/<title>([\s\S]*?)<\/title>/i) || [, ''])[1].trim());
  const metas = tags(h, 'meta');
  const meta = (n) => { const t = metas.find((m) => attr(m, 'name') === n || attr(m, 'property') === n); return t ? attr(t, 'content') : null; };
  const links = tags(h, 'link');
  const canonical = links.filter((l) => attr(l, 'rel') === 'canonical').map((l) => attr(l, 'href'));
  const alternates = links.filter((l) => attr(l, 'rel') === 'alternate' && attr(l, 'hreflang')).map((l) => ({ hreflang: attr(l, 'hreflang'), href: attr(l, 'href') }));
  const robots = meta('robots') || '';
  const noindex = /noindex/i.test(robots);
  const lang = attr(htmlTag, 'lang');
  const dir = attr(htmlTag, 'dir');
  pages[f] = { f, h, title, desc: meta('description'), canonical, alternates, noindex, lang, dir, og: meta('og:image'), url: SITE + urlPathOf(f) };
  ids[f] = new Set([...h.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));

  // lang / dir by path prefix
  const prefix = urlPathOf(f).split('/')[1];
  const expLang = LANG_CODES[prefix] && prefix !== DEF ? prefix : DEF;
  const [expCode, expDir] = LANG_CODES[expLang] || [expLang, 'ltr'];
  if (lang !== expCode) err(f, `html lang="${lang}" (expected "${expCode}")`);
  if ((dir || 'ltr') !== expDir) err(f, `html dir="${dir}" (expected "${expDir}")`);

  // headings
  const h1 = (h.match(/<h1[\s>]/gi) || []).length;
  if (h1 !== 1) err(f, `${h1} <h1> elements (expected exactly 1)`);
  const levels = [...h.replace(/<svg[\s\S]*?<\/svg>/gi, '').matchAll(/<h([1-6])[\s>]/gi)].map((m) => +m[1]);
  for (let i = 1; i < levels.length; i++) if (levels[i] > levels[i - 1] + 1) { wrn(f, `heading level jumps h${levels[i - 1]} -> h${levels[i]}`); break; }

  // JSON-LD
  const ld = [...h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)].map((m) => m[1]);
  if (!noindex && !ld.length) err(f, 'no JSON-LD');
  for (const block of ld) {
    try {
      const j = JSON.parse(block);
      if (!j['@context']) err(f, 'JSON-LD without @context');
      if (/"(undefined|NaN)"|:null\b|\{\{/.test(block)) err(f, 'JSON-LD contains undefined/NaN/null/{{');
      const graph = j['@graph'] || [j];
      const types = graph.flatMap((n) => [].concat(n['@type']));
      if (!noindex) for (const t of ['Organization', 'WebSite', 'WebPage']) if (!types.includes(t)) err(f, `JSON-LD @graph lacks ${t}`);
      // Questions reused from the FAQ page carry data-faq-ref and are marked up only there.
      const ownFaq = (h.match(/<details class="faq-item"(?![^>]*data-faq-ref)[^>]*>/g) || []).length;
      if (ownFaq && !types.includes('FAQPage')) err(f, 'FAQ rendered but no FAQPage JSON-LD');
      if (types.includes('FAQPage')) {
        const node = graph.find((n) => [].concat(n['@type']).includes('FAQPage'));
        const n = (node.mainEntity || []).length;
        if (n !== ownFaq) err(f, `FAQPage has ${n} questions but ${ownFaq} own questions are rendered`);
      }
    } catch (e) { err(f, `JSON-LD does not parse: ${e.message}`); }
  }

  // forbidden tokens in visible text and attributes (scripts/styles excluded)
  const body = h.replace(/<script\b[\s\S]*?<\/script>/gi, ' ').replace(/<style\b[\s\S]*?<\/style>/gi, ' ');
  const text = decode(body.replace(/<[^>]+>/g, ' '));
  const attrVals = [...body.matchAll(/\s[\w:-]+="([^"]*)"/g)].map((m) => decode(m[1])).filter((v) => !/^[\d\s.,MLHVCSQTAZmlhvcsqtaz#()%-]+$/.test(v));
  for (const [where, s] of [['text', text], ['attribute', attrVals.join(' \u0001 ')]]) {
    const m = s.match(forbiddenRe);
    if (m) { const i = m.index; err(f, `forbidden token "${m[0]}" in ${where}: …${s.slice(Math.max(0, i - 40), i + 40).replace(/\s+/g, ' ')}…`); }
  }

  // URL-encoded placeholders in links and meta (e.g. a WhatsApp ?text= with %7B%7Bpage%7D%7D).
  for (const m of body.matchAll(/\s(href|content|src)="([^"]*)"/gi)) {
    let v = decode(m[2]);
    try { v = decodeURIComponent(v); } catch { /* keep raw */ }
    const bad = v.match(/\{\{|\}\}|\bundefined\b|\bnull\b|\bNaN\b/);
    if (bad) { err(f, `placeholder "${bad[0]}" in ${m[1]} after URL-decoding: ${v.slice(0, 120)}`); break; }
  }

  // Localized deliverables: a language never falls back to another language's PDF or share image.
  {
    const lg = langOfPath(f);
    const og = (tags(h, 'meta').find((t) => attr(t, 'property') === 'og:image') || '');
    const ogUrl = og ? attr(og, 'content') : '';
    if (ogUrl && /\/og-[a-z]+\.png$/.test(ogUrl) && !ogUrl.endsWith(`/og-${lg}.png`)) err(f, `og:image ${ogUrl} is not the ${lg} share image`);
    for (const m of h.matchAll(/etahg-company-profile-([a-z]+)\.pdf/g)) if (m[1] !== lg) { err(f, `links the ${m[1]} company-profile PDF on a ${lg} page`); break; }
  }

  // No third-party render-blocking resources (Google domains are blocked in mainland China).
  for (const l of tags(h, 'link')) {
    const href = attr(l, 'href') || '';
    if (/^https?:\/\//.test(href) && !href.startsWith(SITE) && /stylesheet|preconnect|preload/.test(attr(l, 'rel') || '')) err(f, `third-party <link rel="${attr(l, 'rel')}"> ${href}`);
  }
  for (const sc of tags(h, 'script')) { const src = attr(sc, 'src'); if (src && /^https?:\/\//.test(src) && !src.startsWith(SITE)) err(f, `third-party script ${src}`); }

  // Kayle Kenny rule (BRIEF.md): wherever Cummins is mentioned, the disclaimer must be present.
  if (/Cummins/.test(h) && !/Cummins Inc/.test(h)) err(f, 'mentions Cummins without the "not affiliated with or endorsed by Cummins Inc." disclaimer');

  // images
  for (const img of tags(h, 'img')) {
    if (attr(img, 'alt') === null) err(f, `<img> without alt: ${img.slice(0, 80)}`);
    if (!attr(img, 'width') || !attr(img, 'height')) err(f, `<img> without width/height: ${img.slice(0, 80)}`);
  }

  // internal links and assets
  const refs = [...h.matchAll(/\s(href|src)="([^"]*)"/gi)].map((m) => decode(m[2]));
  for (const s of [...h.matchAll(/\ssrcset="([^"]*)"/gi)]) for (const part of decode(s[1]).split(',')) refs.push(part.trim().split(/\s+/)[0]);
  for (const r of refs) {
    if (!r) { err(f, 'empty href/src'); continue; }
    if (r.startsWith('#')) { if (r.length > 1 && !ids[f].has(r.slice(1))) err(f, `broken fragment ${r}`); continue; }
    const res = resolveHref(r, f);
    if (!res) continue;
    const target = fileFor(res.local);
    if (!target) { err(f, `broken link ${r}`); continue; }
    if (!res.abs && /^\//.test(r) && f !== '404.html') wrn(f, `root-relative link ${r} (breaks on a sub-path deployment)`);
  }
}

// cross-page SEO checks
const indexable = Object.values(pages).filter((p) => !p.noindex);
const byTitle = new Map(), byDesc = new Map();
for (const p of indexable) {
  const f = p.f;
  if (!p.title) err(f, 'missing <title>');
  else {
    if (width(p.title) > 60) err(f, `title ${width(p.title)} display width (> 60): "${p.title}"`);
    if (!/\| SARL ETAHG$/.test(p.title) && !/^SARL ETAHG\b/.test(p.title)) wrn(f, `title does not end with "| SARL ETAHG": "${p.title}"`);
    byTitle.set(p.title, [...(byTitle.get(p.title) || []), f]);
  }
  const dl = width(p.desc);
  if (!p.desc) err(f, 'missing meta description');
  else {
    if (dl < 110 || dl > 160) err(f, `meta description width ${dl} (expected 110-160; CJK counts 2)`);
    else if (dl > 155) wrn(f, `meta description width ${dl} (target <= 155)`);
    byDesc.set(p.desc, [...(byDesc.get(p.desc) || []), f]);
  }
  if (p.canonical.length !== 1) err(f, `${p.canonical.length} canonical links`);
  else if (p.canonical[0] !== p.url) err(f, `canonical ${p.canonical[0]} is not self (${p.url})`);
  if (!p.og) err(f, 'missing og:image');
  else if (p.og.startsWith(SITE) && !fileFor(new URL(p.og).pathname)) err(f, `og:image file missing: ${p.og}`);
  // hreflang
  const alts = p.alternates;
  if (!alts.some((x) => x.hreflang === 'x-default')) err(f, 'no hreflang x-default');
  if (!alts.some((x) => x.href === p.url)) err(f, 'hreflang set does not include the page itself');
  const xd = alts.find((x) => x.hreflang === 'x-default');
  const defAlt = alts.find((x) => x.hreflang === (LANG_CODES[DEF] || [DEF])[0]);
  if (xd && defAlt && xd.href !== defAlt.href) err(f, 'x-default does not point to the default-language page');
  for (const alt of alts) {
    if (!alt.href.startsWith(SITE)) { err(f, `hreflang not absolute on site: ${alt.href}`); continue; }
    const tf = fileFor(new URL(alt.href).pathname);
    if (!tf) { err(f, `hreflang ${alt.hreflang} target missing: ${alt.href}`); continue; }
    const tp = pages[tf];
    if (alt.hreflang !== 'x-default' && !tp.alternates.some((x) => x.href === p.url)) err(f, `hreflang ${alt.hreflang} not reciprocal (${tf} does not link back)`);
    if (alt.hreflang !== 'x-default' && tp.lang !== alt.hreflang) err(f, `hreflang ${alt.hreflang} points to a page with lang="${tp.lang}"`);
  }
}
for (const [t, fs_] of byTitle) if (fs_.length > 1) err(fs_.join(', '), `duplicate title "${t}"`);
for (const [d, fs_] of byDesc) if (fs_.length > 1) err(fs_.join(', '), `duplicate description "${d.slice(0, 60)}…"`);

// sitemap
if (!fileSet.has('sitemap.xml')) err('sitemap.xml', 'missing');
else {
  const sm = fs.readFileSync(path.join(DIR, 'sitemap.xml'), 'utf8');
  const locs = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => decode(m[1]));
  const want = new Set(indexable.map((p) => p.url));
  for (const l of locs) if (!want.has(l)) err('sitemap.xml', `lists non-indexable or unknown URL ${l}`);
  for (const u of want) if (!locs.includes(u)) err('sitemap.xml', `missing ${u}`);
  if (new Set(locs).size !== locs.length) err('sitemap.xml', 'duplicate <loc>');
  for (const m of sm.matchAll(/<xhtml:link[^>]*href="([^"]+)"/g)) if (!want.has(decode(m[1]))) err('sitemap.xml', `alternate points to unknown URL ${m[1]}`);
  if (!/<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/.test(sm)) err('sitemap.xml', 'no lastmod');
}

// required files
for (const req of ['.nojekyll', 'robots.txt', 'sitemap.xml', 'llms.txt', 'llms-full.txt', '404.html', 'favicon.svg', 'site.webmanifest', 'etahg.vcf', 'humans.txt']) if (!fileSet.has(req)) err(req, 'required file missing');
for (const opt of ['favicon.ico', 'apple-touch-icon.png', 'icon-192.png', 'icon-512.png']) if (!fileSet.has(opt)) wrn(opt, 'missing (run tools/render-assets.mjs)');
const host = new URL(SITE).host;
if (!/\.github\.io$/i.test(host)) {
  if (!fileSet.has('CNAME')) err('CNAME', 'missing');
  else if (fs.readFileSync(path.join(DIR, 'CNAME'), 'utf8').trim() !== host) err('CNAME', `does not contain ${host}`);
}
if (fileSet.has('robots.txt')) {
  const r = fs.readFileSync(path.join(DIR, 'robots.txt'), 'utf8');
  if (!r.includes(`Sitemap: ${SITE}/sitemap.xml`)) err('robots.txt', 'no Sitemap line');
  if (/Disallow:\s*\/\s*$/m.test(r)) err('robots.txt', 'disallows the whole site');
  for (const b of ['GPTBot', 'ClaudeBot', 'PerplexityBot', 'Google-Extended', 'Bingbot']) if (!r.includes(`User-agent: ${b}`)) wrn('robots.txt', `does not name ${b}`);
}
if (fileSet.has('llms.txt')) {
  const l = fs.readFileSync(path.join(DIR, 'llms.txt'), 'utf8');
  if (!/^# .+\n\n> .+/.test(l)) err('llms.txt', 'must start with "# Title" and a "> summary" blockquote');
  if (forbiddenRe.test(l)) err('llms.txt', `forbidden token: ${l.match(forbiddenRe)[0]}`);
}
if (fileSet.has('llms-full.txt')) {
  const l = fs.readFileSync(path.join(DIR, 'llms-full.txt'), 'utf8');
  if (forbiddenRe.test(l)) err('llms-full.txt', `forbidden token: ${l.match(forbiddenRe)[0]}`);
}

// weight report
const size = (f) => fs.statSync(path.join(DIR, f)).size;
const css = all.filter((f) => /^assets\/site\.[\w]+\.css$/.test(f));
const js = all.filter((f) => /^assets\/site\.[\w]+\.js$/.test(f));
// Budget applies to the design system; the generated @font-face rules (self-hosted fonts) are counted apart.
const cssOwn = (f) => Buffer.byteLength(fs.readFileSync(path.join(DIR, f), 'utf8').replace(/@font-face\{[^}]*\}/g, ''));
for (const c of css) if (cssOwn(c) > 45 * 1024) err(c, `CSS is ${(cssOwn(c) / 1024).toFixed(1)} KB without @font-face (budget 45 KB)`);
for (const j of js) if (size(j) > 5 * 1024) err(j, `JS is ${(size(j) / 1024).toFixed(1)} KB (budget 5 KB)`);
const cssKB = css.reduce((s, f) => s + size(f), 0) / 1024;
const jsKB = js.reduce((s, f) => s + size(f), 0) / 1024;
const weights = htmlFiles.map((f) => ({ f, kb: size(f) / 1024 })).sort((x, y) => y.kb - x.kb);
for (const w of weights) if (w.kb > 250) wrn(w.f, `HTML is ${w.kb.toFixed(0)} KB`);

// report
const pad = (s, n) => String(s).padEnd(n);
console.log(`\nQA report for ${path.relative(process.cwd(), DIR) || DIR}`);
console.log(`  ${htmlFiles.length} HTML files (${indexable.length} indexable), ${all.length} files total`);
const fontKB = all.filter((f) => f.startsWith('assets/fonts/')).reduce((s, f) => s + size(f), 0) / 1024;
console.log(`  CSS ${cssKB.toFixed(1)} KB · JS ${jsKB.toFixed(1)} KB · self-hosted fonts ${fontKB.toFixed(0)} KB (loaded per unicode-range)`);
console.log('  Page weight (HTML, heaviest first):');
for (const w of weights.slice(0, 8)) console.log(`    ${pad(w.f, 48)} ${w.kb.toFixed(1).padStart(6)} KB  (+CSS/JS ${(w.kb + cssKB + jsKB).toFixed(1)} KB)`);
if (warnings.length) { console.log(`\n  WARNINGS (${warnings.length})`); for (const w of warnings) console.log(`    - ${w}`); }
if (errors.length) { console.log(`\n  ERRORS (${errors.length})`); for (const e of errors) console.log(`    x ${e}`); }
console.log(`\n  ${errors.length ? 'FAIL' : 'PASS'}: ${errors.length} error(s), ${warnings.length} warning(s)\n`);
process.exit(errors.length ? 1 : 0);
