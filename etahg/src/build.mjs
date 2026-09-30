#!/usr/bin/env node
// SARL ETAHG static site generator. Zero dependencies.
//   node src/build.mjs [--out DIR]      (default: docs/)
// Wipes DIR and regenerates the complete site. Deterministic for a given
// BUILD_DATE (env, YYYY-MM-DD; default = today UTC).

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { html, raw, esc, plain } from './templates/html.mjs';
import { PAGES, PARENT, SERVICE_PAGES, LANG_META, BASE_FONTS, PHOTO_SLOTS } from './templates/structure.mjs';
import { renderBlocks } from './templates/blocks.mjs';
import { documentShell, breadcrumbs } from './templates/layout.mjs';
import { pageMarkdown } from './templates/text.mjs';
import { FALLBACK_LOGO } from './templates/icons.mjs';
import { topoSvg, strataSvg } from './templates/texture.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(ROOT, 'src');
const ILLUS_DIR = path.join(SRC, 'assets', 'illustrations');
const PHOTO_DIR = path.join(SRC, 'assets', 'photos');
const GEN_DIR = path.join(SRC, 'assets', 'generated');

const warnings = [];
const warn = (m) => { if (!warnings.includes(m)) { warnings.push(m); console.warn(`  warn  ${m}`); } };

/* ------------------------------------------------------------------ args */
function parseArgs(argv) {
  const a = { out: path.join(ROOT, 'docs'), content: path.join(SRC, 'content') };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--out') a.out = path.resolve(argv[++i]);
    else if (argv[i].startsWith('--out=')) a.out = path.resolve(argv[i].slice(6));
    else if (argv[i] === '--content') a.content = path.resolve(argv[++i]); // alternative content folder (testing)
  }
  return a;
}

/* --------------------------------------------------------------- helpers */
const hash = (buf) => crypto.createHash('sha256').update(buf).digest('hex').slice(0, 10);
const today = () => new Date().toISOString().slice(0, 10);

function deepMap(v, fn) {
  if (typeof v === 'string') return fn(v);
  if (Array.isArray(v)) return v.map((x) => deepMap(x, fn));
  if (v && typeof v === 'object') { const o = {}; for (const [k, x] of Object.entries(v)) o[k] = deepMap(x, fn); return o; }
  return v;
}
function deepMerge(base, over, missing = [], trail = '') {
  if (over === undefined) { if (base !== undefined) missing.push(trail); return base; }
  if (base && typeof base === 'object' && !Array.isArray(base) && over && typeof over === 'object' && !Array.isArray(over)) {
    const o = { ...over };
    for (const k of Object.keys(base)) o[k] = deepMerge(base[k], over[k], missing, trail ? `${trail}.${k}` : k);
    return o;
  }
  return over;
}

// Relative URL from a page directory ('fr/services/x/') to an output path ('about/' or 'assets/a.css').
function relUrl(fromDir, to) {
  const from = fromDir.split('/').filter(Boolean);
  const target = to.split('/');
  const isDir = to === '' || to.endsWith('/');
  const tparts = target.filter(Boolean);
  let i = 0;
  while (i < from.length && i < tparts.length - (isDir ? 0 : 1) && from[i] === tparts[i]) i++;
  const up = '../'.repeat(from.length - i);
  const rest = tparts.slice(i).join('/');
  let r = up + rest + (isDir && rest ? '/' : '');
  return r || './';
}

// Image dimensions for PNG / JPEG / WebP / GIF (for width/height attributes).
function imageSize(buf) {
  if (buf.slice(0, 8).toString('hex') === '89504e470d0a1a0a') return { w: buf.readUInt32BE(16), h: buf.readUInt32BE(20) };
  if (buf.slice(0, 3).toString('ascii') === 'GIF') return { w: buf.readUInt16LE(6), h: buf.readUInt16LE(8) };
  if (buf.slice(0, 4).toString('ascii') === 'RIFF' && buf.slice(8, 12).toString('ascii') === 'WEBP') {
    const t = buf.slice(12, 16).toString('ascii');
    if (t === 'VP8X') return { w: 1 + buf.readUIntLE(24, 3), h: 1 + buf.readUIntLE(27, 3) };
    if (t === 'VP8 ') return { w: buf.readUInt16LE(26) & 0x3fff, h: buf.readUInt16LE(28) & 0x3fff };
    if (t === 'VP8L') { const b = buf.readUInt32LE(21); return { w: 1 + (b & 0x3fff), h: 1 + ((b >> 14) & 0x3fff) }; }
  }
  if (buf[0] === 0xff && buf[1] === 0xd8) {
    let o = 2;
    while (o < buf.length) {
      if (buf[o] !== 0xff) { o++; continue; }
      const m = buf[o + 1];
      if (m >= 0xc0 && m <= 0xcf && m !== 0xc4 && m !== 0xc8 && m !== 0xcc) return { h: buf.readUInt16BE(o + 5), w: buf.readUInt16BE(o + 7) };
      o += 2 + buf.readUInt16BE(o + 2);
    }
  }
  return null;
}

// Conservative CSS minifier: comments, whitespace, spaces around { } ; , only.
function minifyCss(s) {
  return s.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\s+/g, ' ').replace(/\s*([{};,])\s*/g, '$1').replace(/;}/g, '}').trim() + '\n';
}

/* ---------------------------------------------------------- illustrations */
const illusCache = new Map();
function loadIllustration(name) {
  if (illusCache.has(name)) return illusCache.get(name);
  const f = path.join(ILLUS_DIR, `${name}.svg`);
  let s = null;
  if (fs.existsSync(f)) s = fs.readFileSync(f, 'utf8');
  else warn(`illustration missing: src/assets/illustrations/${name}.svg (placeholder rendered)`);
  illusCache.set(name, s);
  return s;
}

// Clean and inline an SVG; prefix ids so the same SVG can appear twice on a page.
function inlineSvg(src, uid, cls) {
  let s = src
    .replace(/<\?xml[\s\S]*?\?>/g, '')
    .replace(/<!DOCTYPE[\s\S]*?>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<metadata[\s\S]*?<\/metadata>/gi, '')
    .trim();
  const ids = [...s.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
  for (const id of new Set(ids)) {
    const nid = `${uid}-${id}`;
    const q = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    s = s.replace(new RegExp(`\\sid="${q}"`, 'g'), ` id="${nid}"`)
      .replace(new RegExp(`url\\(#${q}\\)`, 'g'), `url(#${nid})`)
      .replace(new RegExp(`(xlink:)?href="#${q}"`, 'g'), (m, x) => `${x || ''}href="#${nid}"`)
      .replace(new RegExp(`aria-labelledby="${q}"`, 'g'), `aria-labelledby="${nid}"`);
  }
  s = s.replace(/<svg\b([^>]*)>/, (m, a) => {
    let at = a;
    const vb = /viewBox="/.test(at);
    const w = (at.match(/\swidth="([\d.]+)(px)?"/) || [])[1];
    const h = (at.match(/\sheight="([\d.]+)(px)?"/) || [])[1];
    at = at.replace(/\s(width|height)="[^"]*"/g, '').replace(/\sclass="[^"]*"/, '').replace(/\saria-hidden="[^"]*"/, '').replace(/\sfocusable="[^"]*"/, '').replace(/\srole="[^"]*"/, '');
    if (!vb && w && h) at += ` viewBox="0 0 ${w} ${h}"`;
    return `<svg${at} class="${cls}" aria-hidden="true" focusable="false">`;
  });
  // Titles inside decorative SVGs are redundant for AT (aria-hidden) — drop them.
  s = s.replace(/<title[\s\S]*?<\/title>/gi, '').replace(/<desc[\s\S]*?<\/desc>/gi, '');
  return s;
}

function placeholderSvg(cls) {
  return `<svg viewBox="0 0 400 300" class="${cls} illus-placeholder" aria-hidden="true" focusable="false"><rect x="1" y="1" width="398" height="298" fill="none" stroke="currentColor" stroke-opacity=".25" stroke-dasharray="3 6"/><g fill="none" stroke="currentColor" stroke-opacity=".35" stroke-width="1.5"><path d="M20 230 C90 205 150 245 220 222 S330 200 380 214"/><path d="M20 250 C100 228 160 262 230 244 S320 226 380 238"/><path d="M20 270 C110 252 170 280 240 266 S330 252 380 262"/></g><path d="M170 150 l30 -40 l30 40 z" fill="none" stroke="currentColor" stroke-opacity=".4" stroke-width="2"/><rect x="186" y="170" width="28" height="4" fill="var(--accent,#E2A21B)"/></svg>`;
}

/* ================================================================= BUILD */
async function main() {
  const args = parseArgs(process.argv.slice(2));
  const OUT = args.out;
  const forbidden = [ROOT, SRC, path.parse(ROOT).root, process.env.HOME || '/root'].map((p) => path.resolve(p));
  if (forbidden.includes(path.resolve(OUT))) throw new Error(`refusing to wipe ${OUT}`);

  const site = JSON.parse(fs.readFileSync(path.join(ROOT, 'site.config.json'), 'utf8'));
  site.siteUrl = String(site.siteUrl).replace(/\/+$/, '');
  site.contact = site.contact || {};
  const buildDate = process.env.BUILD_DATE || today();
  const year = buildDate.slice(0, 4);
  const DEF = site.defaultLanguage || 'en';
  console.log(`Building SARL ETAHG site -> ${path.relative(process.cwd(), OUT) || OUT} (BUILD_DATE ${buildDate})`);

  /* ---------------------------------------------------------- languages */
  const tokens = {
    company: site.companyName, short: site.shortName, phone: site.contact.phone,
    group: (site.group || [])[0]?.name || '', year,
  };
  const applyTokens = (s) => s.replace(/\{\{(\w+)\}\}/g, (m, k) => (k in tokens ? tokens[k] : m));
  const langs = [];
  const content = {};
  for (const lang of site.languages || [DEF]) {
    const f = path.join(args.content, `${lang}.mjs`);
    if (!fs.existsSync(f)) { warn(`language "${lang}" skipped: ${path.relative(ROOT, f)} not found`); continue; }
    const mod = await import(pathToFileURL(f).href + `?t=${Date.now()}`);
    content[lang] = deepMap(mod.default, applyTokens);
    langs.push(lang);
  }
  if (!content[DEF]) throw new Error(`default language file ${path.relative(ROOT, path.join(args.content, DEF + '.mjs'))} is required`);
  // Fill missing UI strings from the default language (with a warning).
  for (const lang of langs) {
    if (lang === DEF) continue;
    const missing = [];
    content[lang].ui = deepMerge(content[DEF].ui, content[lang].ui || {}, missing);
    if (missing.length) warn(`${lang}: ${missing.length} ui string(s) missing, English used: ${missing.slice(0, 5).join(', ')}${missing.length > 5 ? '…' : ''}`);
    for (const id of PAGES) if (!content[lang].pages?.[id]) warn(`${lang}: page "${id}" missing, not generated`);
  }
  const langMeta = (l) => ({ ...LANG_META[l], ...(content[l]?.meta || {}) });
  const hasPage = (id, l) => !!content[l]?.pages?.[id];
  const slugOf = (id, l) => {
    const p = content[l]?.pages?.[id];
    const s = p && typeof p.slug === 'string' ? p.slug : content[DEF].pages[id]?.slug ?? id;
    return s.replace(/^\/+|\/+$/g, '');
  };
  const pagePath = (id, l) => {
    const s = slugOf(id, l);
    return (l === DEF ? '' : `${l}/`) + (s ? `${s}/` : '');
  };

  /* ------------------------------------------------------------- output */
  fs.rmSync(OUT, { recursive: true, force: true });
  fs.mkdirSync(OUT, { recursive: true });
  const files = new Set();
  const write = (rel, data) => {
    const f = path.join(OUT, rel);
    fs.mkdirSync(path.dirname(f), { recursive: true });
    fs.writeFileSync(f, data);
    files.add(rel.split(path.sep).join('/'));
  };
  const copy = (from, rel) => write(rel, fs.readFileSync(from));

  // CSS / JS (fingerprinted) + textures.
  const css = fs.readFileSync(path.join(SRC, 'assets', 'css', 'site.css'));
  const js = fs.readFileSync(path.join(SRC, 'assets', 'js', 'site.js'));
  const cssMin = Buffer.from(minifyCss(css.toString('utf8')));
  const cssFile = `assets/site.${hash(cssMin)}.css`;
  const jsFile = `assets/site.${hash(js)}.js`;
  write(cssFile, cssMin);
  write(jsFile, js);
  write('assets/topo.svg', topoSvg());
  write('assets/strata.svg', strataSvg());

  // Logo.
  const logoSrc = loadIllustration('logo-mark') || (warn('using temporary built-in logo mark'), FALLBACK_LOGO);
  let logoCount = 0;
  const logoSvg = () => raw(inlineSvg(logoSrc, `logo${++logoCount}`, 'logo-svg').replace('<svg ', '<svg width="38" height="38" '));
  // favicon.svg: logo mark on ink tile, amber accent.
  const favInner = logoSrc.replace(/<\?xml[\s\S]*?\?>/, '').replace(/<!--[\s\S]*?-->/g, '')
    .replace(/currentColor/g, '#F6F4EF').replace(/var\(--accent[^)]*\)/g, '#E2A21B');
  const favVb = (favInner.match(/viewBox="([^"]+)"/) || [, '0 0 64 64'])[1].split(/[\s,]+/).map(Number);
  const favBody = favInner.replace(/^[\s\S]*?<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '');
  const pad = Math.max(favVb[2], favVb[3]) * 0.16;
  write('favicon.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${favVb[0] - pad} ${favVb[1] - pad} ${favVb[2] + 2 * pad} ${favVb[3] + 2 * pad}"><rect x="${favVb[0] - pad}" y="${favVb[1] - pad}" width="${favVb[2] + 2 * pad}" height="${favVb[3] + 2 * pad}" fill="#0F1318"/>${favBody}</svg>`);

  // Generated binaries (tools/render-assets.mjs).
  const gen = (n) => { const f = path.join(GEN_DIR, n); return fs.existsSync(f) ? f : null; };
  for (const [src, dst] of [['logo-512.png', 'icon-512.png'], ['logo-192.png', 'icon-192.png'], ['apple-touch-icon.png', 'apple-touch-icon.png'], ['favicon-48.png', 'favicon-48.png']]) {
    const f = gen(src);
    if (f) copy(f, dst); else warn(`src/assets/generated/${src} missing (run: node tools/render-assets.mjs)`);
  }
  if (files.has('favicon-48.png')) {
    // favicon.ico containing the 48px PNG (PNG-in-ICO, supported by all modern browsers).
    const png = fs.readFileSync(path.join(OUT, 'favicon-48.png'));
    const head = Buffer.alloc(22);
    head.writeUInt16LE(0, 0); head.writeUInt16LE(1, 2); head.writeUInt16LE(1, 4);
    head.writeUInt8(48, 6); head.writeUInt8(48, 7); head.writeUInt8(0, 8); head.writeUInt8(0, 9);
    head.writeUInt16LE(1, 10); head.writeUInt16LE(32, 12); head.writeUInt32LE(png.length, 14); head.writeUInt32LE(22, 18);
    write('favicon.ico', Buffer.concat([head, png]));
  }
  const ogFor = {}, pdfFor = {};
  for (const l of langs) {
    const o = gen(`og-${l}.png`);
    if (o) { copy(o, `assets/og-${l}.png`); ogFor[l] = `assets/og-${l}.png`; } else warn(`src/assets/generated/og-${l}.png missing (run: node tools/render-assets.mjs)`);
    const p = gen(`etahg-company-profile-${l}.pdf`);
    if (p) { copy(p, `downloads/etahg-company-profile-${l}.pdf`); pdfFor[l] = `downloads/etahg-company-profile-${l}.pdf`; } else warn(`src/assets/generated/etahg-company-profile-${l}.pdf missing (run: node tools/render-assets.mjs)`);
  }

  // Photos.
  const photos = {};
  for (const [slot, entry] of Object.entries(site.photos || {})) {
    const e = typeof entry === 'string' ? { file: entry } : entry || {};
    if (!e.file) continue;
    const f = path.join(PHOTO_DIR, e.file);
    if (!fs.existsSync(f)) { warn(`photo for slot "${slot}" not found: src/assets/photos/${e.file}`); continue; }
    const buf = fs.readFileSync(f);
    const size = imageSize(buf);
    if (!size) { warn(`photo "${e.file}": unsupported format (use JPG, PNG or WebP)`); continue; }
    const rel = `assets/photos/${e.file.replace(/[^\w.-]+/g, '-')}`;
    write(rel, buf);
    photos[slot] = { rel, ...size, alt: e.alt };
  }

  /* ------------------------------------------------------------ context */
  const abs = (id, l) => `${site.siteUrl}/${pagePath(id, l)}`;
  const faqIndex = (l) => {
    const map = {};
    for (const [pid, p] of Object.entries(content[l].pages || {})) for (const b of p.blocks || []) if (b.type === 'faq' && b.items) for (const it of b.items) if (it.id) map[`${pid}:${it.id}`] = it;
    return map;
  };

  function makeContext(lang, pageId, page, opts = {}) {
    const t = content[lang];
    const ui = t.ui;
    const L = langMeta(lang);
    const absolute = !!opts.absolute; // 404 page: absolute URLs (served from any path)
    const fromDir = opts.fromDir ?? pagePath(pageId, lang);
    const toUrl = (p) => (absolute ? `${site.siteUrl}/${p}` : relUrl(fromDir, p));
    let tone = 0, num = 0, uidN = 0;
    const usedIds = new Set();
    const c = site.contact;
    const ctx = {
      site, config: site, lang, L, t, ui, page, pageId, buildDate, noindex: !!opts.noindex,
      switchPage: opts.altPage || pageId,
      cssFile, jsFile, warn,
      languagesPresent: langs,
      langMeta,
      hasPage: (id, l = lang) => hasPage(id, l),
      hasFile: (p) => files.has(p),
      pageNav: (id, l = lang) => (content[l].pages[id] || content[DEF].pages[id])?.nav || id,
      href(id, l = lang, hashFrag) {
        const target = hasPage(id, l) ? l : hasPage(id, lang) ? lang : DEF;
        return toUrl(pagePath(id, target)) + (hashFrag ? `#${hashFrag}` : '');
      },
      abs: (id, l = lang) => abs(id, hasPage(id, l) ? l : DEF),
      asset: (p) => toUrl(p),
      alternates: () => langs.filter((l) => hasPage(opts.altPage || pageId, l)).map((l) => {
        const m = langMeta(l);
        return { lang: l, hreflang: m.hreflang, htmlLang: m.htmlLang, ogLocale: m.ogLocale, label: m.label, name: m.name, url: abs(opts.altPage || pageId, l) };
      }),
      crumbTrail() {
        const trail = [];
        for (let id = pageId; id; id = PARENT[id]) trail.unshift({ id, name: id === 'home' ? ui.homeLabel : ctx.pageNav(id) });
        return trail;
      },
      breadcrumbs: () => breadcrumbs(ctx),
      resolveLink(target) {
        if (target.startsWith('page:')) {
          const [idPart, frag] = target.slice(5).split('#');
          const [id, l] = idPart.split('@');
          if (l && !hasPage(id, l)) return null;
          if (!content[DEF].pages[id]) { warn(`link to unknown page "${id}"`); return null; }
          return { href: ctx.href(id, l || lang, frag) };
        }
        if (target === 'tel:') return { href: ctx.telUrl() };
        if (target === 'whatsapp:') return { href: ctx.whatsappUrl(), external: true };
        if (target === 'mailto:') return c.email ? { href: ctx.mailUrl() } : null;
        if (target === 'pdf:') return { href: ctx.pdf().href };
        return { href: target, external: /^https?:/.test(target) };
      },
      absLink(target) {
        if (target.startsWith('page:')) {
          const [idPart, frag] = target.slice(5).split('#');
          const [id, l] = idPart.split('@');
          if (l && !hasPage(id, l)) return null;
          return abs(id, l || lang) + (frag ? `#${frag}` : '');
        }
        if (target === 'tel:') return ctx.telUrl();
        if (target === 'whatsapp:') return `https://wa.me/${c.whatsapp}`;
        if (target === 'mailto:') return c.email ? ctx.mailUrl() : null;
        if (target === 'pdf:') return ctx.pdfAbs();
        return target;
      },
      whatsappUrl(message) {
        const msg = message || page.whatsapp || ui.whatsappMessage.replace('{{page}}', page.nav || '');
        return `https://wa.me/${c.whatsapp}?text=${encodeURIComponent(msg)}`;
      },
      telUrl: () => `tel:${String(c.phone).replace(/[^+\d]/g, '')}`,
      mailUrl: () => (c.email ? `mailto:${c.email}` : null),
      pdf() {
        const rel = pdfFor[lang] || pdfFor[DEF];
        if (rel) return { href: toUrl(rel), isPdf: true, filename: path.posix.basename(rel) };
        return { href: ctx.href('profile'), isPdf: false };
      },
      pdfAbs() { const rel = pdfFor[lang] || pdfFor[DEF]; return rel ? `${site.siteUrl}/${rel}` : abs('profile', lang); },
      ogImage() { const rel = ogFor[lang] || ogFor[DEF]; return rel ? { url: `${site.siteUrl}/${rel}` } : files.has('icon-512.png') ? { url: `${site.siteUrl}/icon-512.png` } : null; },
      logoPng: () => (files.has('icon-512.png') ? { url: `${site.siteUrl}/icon-512.png`, size: 512 } : null),
      logoSvg,
      fontsUrl() {
        const fam = [...BASE_FONTS, ...(L.fonts || [])].map((f) => `family=${f}`).join('&');
        return `https://fonts.googleapis.com/css2?${fam}&display=swap`;
      },
      visual(name, o = {}) {
        const cls = `illus ${o.cls || ''}`.trim();
        const slot = PHOTO_SLOTS[name] || name;
        const ph = photos[slot];
        if (ph) {
          const alt = ctx.localize(ph.alt) || ui.photoAlt?.[slot] || site.companyName;
          return html`<div class="${cls} has-photo"><img src="${toUrl(ph.rel)}" width="${ph.w}" height="${ph.h}" alt="${alt}"${raw(o.eager ? ' fetchpriority="high"' : ' loading="lazy" decoding="async"')}></div>`;
        }
        if (!name) return '';
        const src = loadIllustration(name);
        return raw(`<div class="${esc(cls)}${src ? '' : ' is-placeholder'}">${src ? inlineSvg(src, ctx.uid('i'), 'illus-svg') : placeholderSvg('illus-svg')}</div>`);
      },
      localize(v) { if (v == null) return ''; if (typeof v === 'string' || typeof v === 'number') return String(v); return v[lang] || v[DEF] || ''; },
      locName: (l) => (lang === DEF ? l.locality : l.names?.[lang] || l.locality),
      regionName(l) {
        const r = l.region || '';
        if (ui.locations.regionNames?.[r]) return ui.locations.regionNames[r];
        if (lang === DEF) return r;
        const same = (site.locations || []).find((x) => x.locality === r && x.names?.[lang]);
        return same ? same.names[lang] : r;
      },
      addressLine(l) {
        const parts = [];
        if (l.id === 'hq' && c.address?.street) parts.push(c.address.street);
        if (l.id === 'hq' && c.address?.postalCode) parts.push(`${c.address.postalCode} ${ctx.locName(l)}`); else parts.push(ctx.locName(l));
        parts.push(ui.facts.countryValue);
        return parts.join(', ');
      },
      stats() {
        const out = [];
        const fl = ui.fleetLabels;
        if (site.foundedYear) out.push({ label: fl.yearsLabel, value: String(site.foundedYear) });
        if (site.crushingCapacityTonnesPerHour) out.push({ label: ui.facts.capacity, value: `${site.crushingCapacityTonnesPerHour} t/h` });
        for (const [k, v] of Object.entries(site.fleet || {})) if (Number.isFinite(v) && v > 0 && fl[k]) out.push({ label: fl[k], value: String(v) });
        return out;
      },
      facts(variant) {
        const F = ui.facts;
        const rows = [];
        const add = (label, value, h) => { if (value !== undefined && value !== null && value !== '') rows.push({ label, value, html: h }); };
        const hq = (site.locations || []).find((l) => l.id === 'hq');
        const reg = site.registry || {};
        const phoneHtml = `<a href="${esc(ctx.telUrl())}" dir="ltr">${esc(c.phone)}</a>`;
        const mailHtml = c.email ? `<a href="${esc(ctx.mailUrl())}">${esc(c.email)}</a>` : '';
        if (variant === 'legal') {
          add(F.publisher, site.companyName);
          add(F.legalForm, F.legalFormValue);
          if (hq) add(F.registeredOffice, ctx.addressLine(hq));
          add(F.founded, site.foundedYear ? String(site.foundedYear) : '');
          add(F.rc, reg.rc); add(F.nif, reg.nif); add(F.nis, reg.nis); add(F.ai, reg.ai);
          add(F.phone, c.phone, phoneHtml);
          add(F.email, c.email, mailHtml);
          add(F.website, site.siteUrl.replace(/^https?:\/\//, ''));
          return rows;
        }
        add(F.legalName, site.companyName);
        add(F.legalForm, F.legalFormValue);
        add(F.country, F.countryValue);
        if (hq) add(F.registeredOffice, `${ctx.locName(hq)} (${ui.locations.wilaya.replace('{{region}}', ctx.regionName(hq))})`);
        if (c.address?.street) add(F.address, ctx.addressLine(hq || {}));
        const others = (site.locations || []).filter((l) => l.id !== 'hq');
        if (others.length) {
          const v = others.map((l) => `${ui.locations.types[l.id] || l.type}: ${ctx.locName(l)}`).join('; ');
          add(F.operations, v, others.map((l) => `<span class="fact-line">${esc(ui.locations.types[l.id] || l.type)}: ${esc(ctx.locName(l))}</span>`).join(''));
        }
        add(F.activities, F.activitiesValue);
        add(F.founded, site.foundedYear ? String(site.foundedYear) : '');
        const fleetRows = Object.entries(site.fleet || {}).filter(([k, v]) => Number.isFinite(v) && v > 0 && ui.fleetLabels[k]);
        if (fleetRows.length) add(F.fleet, fleetRows.map(([k, v]) => `${ui.fleetLabels[k]}: ${v}`).join('; '));
        if (site.crushingCapacityTonnesPerHour) add(F.capacity, `${site.crushingCapacityTonnesPerHour} ${F.capacityUnit}`);
        const certs = (site.certifications || []).map((x) => (typeof x === 'string' ? x : x?.name)).filter(Boolean);
        if (certs.length) add(F.certifications, certs.join(', '));
        add(F.rc, reg.rc); add(F.nif, reg.nif); add(F.nis, reg.nis); add(F.ai, reg.ai);
        add(F.languages, F.languagesValue);
        add(F.group, F.groupValue);
        add(F.phone, c.phone, phoneHtml);
        add(F.email, c.email, mailHtml);
        add(F.website, site.siteUrl.replace(/^https?:\/\//, ''));
        return rows;
      },
      faqItems(b) {
        if (b.items) return b.items;
        if (b.from) {
          const idx = faqIndex(lang);
          const idxDef = faqIndex(DEF);
          return (b.ids || []).map((id) => idx[`${b.from}:${id}`] || idxDef[`${b.from}:${id}`] || (warn(`faq item "${b.from}:${id}" not found`), null)).filter(Boolean);
        }
        return [];
      },
      pageFaqs() { return (page.blocks || []).filter((b) => b.type === 'faq').flatMap((b) => ctx.faqItems(b)); },
      nextTone(type) { if (type === 'terrain') return 'ink'; return ['paper', 'stone'][tone++ % 2]; },
      nextNumber: () => ++num,
      uid: (p = 'u') => `${p}${++uidN}`,
      slugId(label) {
        let base = String(label).toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-|-$/g, '') || 's';
        let id = base, n = 2;
        while (usedIds.has(id)) id = `${base}-${n++}`;
        usedIds.add(id);
        return id;
      },
    };
    return ctx;
  }

  /* -------------------------------------------------------------- pages */
  const sitemapEntries = [];
  let pageCount = 0;
  for (const lang of langs) {
    for (const id of PAGES) {
      if (!hasPage(id, lang)) continue;
      const page = content[lang].pages[id];
      const ctx = makeContext(lang, id, page);
      let main = renderBlocks(page.blocks, ctx);
      if (page.layout === 'profile') {
        main = html`<div class="print-head" aria-hidden="true"><span class="brand-mark">${logoSvg()}</span><span class="print-head-name">${site.companyName}</span><span class="print-head-meta">${site.siteUrl.replace(/^https?:\/\//, '')} · <span dir="ltr">${site.contact.phone}</span>${site.contact.email ? ` · ${site.contact.email}` : ''}</span></div>${main}`;
      }
      write(path.join(pagePath(id, lang), 'index.html'), String(documentShell(ctx, main)));
      sitemapEntries.push({ id, lang });
      pageCount++;
    }
  }

  // 404 (absolute URLs so it works at any depth).
  {
    const ui = content[DEF].ui;
    const nf = ui.notFound;
    const page = {
      nav: nf.heading, title: nf.title, description: content[DEF].pages.home.description,
      blocks: [
        { type: 'hero', size: 'page', eyebrow: '404', title: nf.heading, lead: nf.text, ctas: [{ label: nf.home, page: 'home', variant: 'primary' }, { label: ui.contactCta, page: 'contact', variant: 'secondary' }] },
        { type: 'links', title: content[DEF].pages.services.nav, items: [...SERVICE_PAGES, 'partners', 'about'].filter((i) => hasPage(i, DEF)).map((i) => ({ title: content[DEF].pages[i].nav, text: content[DEF].pages[i].summary || '', page: i })) },
      ],
    };
    const ctx = makeContext(DEF, 'notfound', page, { absolute: true, noindex: true, altPage: 'home', fromDir: '' });
    ctx.crumbTrail = () => [];
    let out = String(documentShell(ctx, renderBlocks(page.blocks, ctx)));
    out = out.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>\n?/, '');
    // Self-contained styling: 404.html is served for any missing path, so inline the CSS.
    const inlineCss = cssMin.toString('utf8').replace(/url\("(topo|strata)\.svg"\)/g, `url("${site.siteUrl}/assets/$1.svg")`);
    out = out.replace(/<link rel="stylesheet" href="[^"]*assets\/site\.[\w]+\.css">/, () => `<style>${inlineCss}</style>`);
    write('404.html', out);
  }

  /* ------------------------------------------------------- site files */
  const host = new URL(site.siteUrl).host;
  write('.nojekyll', '');
  if (!/\.github\.io$/i.test(host)) write('CNAME', `${host}\n`);

  // robots.txt
  const bots = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'anthropic-ai', 'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'Googlebot', 'Bingbot', 'Applebot', 'Applebot-Extended', 'CCBot', 'meta-externalagent', 'Amazonbot', 'DuckAssistBot', 'YandexBot'];
  write('robots.txt', [
    `# robots.txt for ${site.siteUrl}`,
    '# All search engines and AI assistants are welcome to crawl and cite this site.',
    '', 'User-agent: *', 'Allow: /', '',
    ...bots.flatMap((b) => [`User-agent: ${b}`, 'Allow: /', '']),
    `Sitemap: ${site.siteUrl}/sitemap.xml`, '',
  ].join('\n'));

  // sitemap.xml
  const sm = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">'];
  for (const { id, lang } of sitemapEntries) {
    sm.push('  <url>', `    <loc>${esc(abs(id, lang))}</loc>`, `    <lastmod>${buildDate}</lastmod>`);
    for (const l of langs) if (hasPage(id, l)) sm.push(`    <xhtml:link rel="alternate" hreflang="${langMeta(l).hreflang}" href="${esc(abs(id, l))}"/>`);
    sm.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${esc(abs(id, DEF))}"/>`);
    sm.push(`    <priority>${id === 'home' ? '1.0' : SERVICE_PAGES.includes(id) || id === 'partners' ? '0.9' : id === 'legal' ? '0.3' : '0.7'}</priority>`, '  </url>');
  }
  sm.push('</urlset>', '');
  write('sitemap.xml', sm.join('\n'));

  // llms.txt + llms-full.txt (English).
  const en = content[DEF];
  const enCtx = (id) => makeContext(DEF, id, en.pages[id]);
  const homeCtx = enCtx('home');
  const facts = homeCtx.facts('full');
  const summary = plain(en.pages.home.description);
  const linkLine = (id) => `- [${en.pages[id].nav}](${abs(id, DEF)}): ${plain(en.pages[id].summary || en.pages[id].description)}`;
  const llms = [
    `# ${site.companyName}`, '',
    `> ${summary} Registered office in Ghardaïa, equipment depot in Djelfa, stone crushing plant at Oued Seddeur (about 25 km south of Djelfa); group spare-parts company EURL KAYLE KENNY in Mohammadia, Algiers.`, '',
    'This file summarises verified facts about SARL ETAHG for AI assistants and search engines. The acronym "ETAHG" is the company name and is not expanded.', '',
    '## Key facts', '',
    ...facts.filter((r) => ![en.ui.facts.registeredOffice, en.ui.facts.operations, en.ui.facts.group].includes(r.label)).map((r) => `- ${r.label}: ${r.value}`),
    `- WhatsApp: https://wa.me/${site.contact.whatsapp}`,
    ...(site.locations || []).map((l) => `- ${en.ui.locations.types[l.id] || l.type}: ${l.locality} (wilaya of ${l.region})${l.note ? `, ${l.note}` : ''}`),
    '- Group company: EURL KAYLE KENNY (https://www.kaylekenny.com), heavy-duty diesel engine spare parts, Cummins-compatible; independent supplier, not affiliated with or endorsed by Cummins Inc.',
    '',
    '## Services', '', ...['services', ...SERVICE_PAGES].filter((i) => hasPage(i, DEF)).map(linkLine), '',
    '## Company', '', ...['about', 'fleet', 'experience', 'partners', 'faq', 'contact', 'profile'].filter((i) => hasPage(i, DEF)).map(linkLine),
    ...(pdfFor[DEF] ? [`- [Company profile (PDF)](${site.siteUrl}/${pdfFor[DEF]}): printable company profile`] : []), '',
    '## Other languages', '', ...langs.filter((l) => l !== DEF).map((l) => `- [${langMeta(l).name}](${abs('home', l)}): ${langMeta(l).name} version of the site`),
    ...(langs.length === 1 ? ['- French, Arabic and Simplified Chinese versions are in preparation.'] : []), '',
    '## Optional', '', `- [Full text of the English website](${site.siteUrl}/llms-full.txt): all English pages as Markdown`,
    `- [Sitemap](${site.siteUrl}/sitemap.xml)`, `- [Legal notice and privacy](${abs('legal', DEF)})`, '',
  ].join('\n');
  write('llms.txt', llms);
  const full = [`# ${site.companyName}: full website text (English)`, '', `> ${summary}`, '', `Source: ${site.siteUrl}/ · Generated ${buildDate}`, ''];
  for (const id of PAGES) {
    if (!hasPage(id, DEF)) continue;
    full.push('---', '', `URL: ${abs(id, DEF)}`, '', pageMarkdown(enCtx(id)).replace(/^# /, '# '), '');
  }
  write('llms-full.txt', full.join('\n').replace(/\n{3,}/g, '\n\n'));

  // vCard.
  const a = site.contact.address || {};
  const vc = ['BEGIN:VCARD', 'VERSION:3.0', `FN:${site.companyName}`, `ORG:${site.companyName}`, 'N:;;;;',
    `TEL;TYPE=WORK,VOICE:${String(site.contact.phone).replace(/[^+\d]/g, '')}`,
    site.contact.email && `EMAIL;TYPE=WORK:${site.contact.email}`,
    `ADR;TYPE=WORK:;;${a.street || ''};${a.locality || ''};${a.region || ''};${a.postalCode || ''};Algeria`,
    `URL:${site.siteUrl}/`,
    `NOTE:${plain(en.ui.footer.tagline).replace(/[,;]/g, (m) => '\\' + m)}`,
    'END:VCARD', ''].filter(Boolean).join('\r\n');
  write('etahg.vcf', vc);

  // Web manifest.
  write('site.webmanifest', JSON.stringify({
    name: site.companyName, short_name: site.shortName, description: plain(en.ui.footer.tagline),
    start_url: './', scope: './', display: 'browser', background_color: '#F6F4EF', theme_color: '#0F1318',
    icons: [
      files.has('icon-192.png') && { src: 'icon-192.png', sizes: '192x192', type: 'image/png' },
      files.has('icon-512.png') && { src: 'icon-512.png', sizes: '512x512', type: 'image/png' },
      { src: 'favicon.svg', sizes: 'any', type: 'image/svg+xml' },
    ].filter(Boolean),
  }, null, 2));

  write('humans.txt', [
    '/* TEAM */', `  Company: ${site.companyName}`, `  Contact: ${site.contact.phone}`, `  Location: Ghardaïa and Djelfa, Algeria`, '',
    '/* SITE */', `  Last update: ${buildDate}`, `  Languages: ${langs.map((l) => langMeta(l).name).join(', ')}`,
    '  Standards: HTML5, CSS3, schema.org JSON-LD', '  Components: none (static, zero-dependency generator)', '  Privacy: no cookies, no tracking', '',
  ].join('\n'));

  console.log(`  ${pageCount} pages in ${langs.length} language(s) [${langs.join(', ')}], ${files.size} files written, ${warnings.length} warning(s).`);
}

main().catch((e) => { console.error(e); process.exit(1); });
