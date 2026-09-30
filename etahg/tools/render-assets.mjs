#!/usr/bin/env node
// Renders the generated binaries that build.mjs copies into the site:
//   src/assets/generated/og-<lang>.png                     Open Graph images 1200x630
//   src/assets/generated/etahg-company-profile-<lang>.pdf  company profile (A4 PDF)
//   src/assets/generated/logo-512.png, logo-192.png, apple-touch-icon.png (180), favicon-48.png
// Usage: node tools/render-assets.mjs [--only og,pdf,icons]
// Re-run whenever the logo, the company-profile content or the OG texts change,
// then run the normal build. The build itself never needs Playwright.
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { startServer } from './serve.mjs';
import { launch, routeFonts } from './browser.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const GEN = path.join(ROOT, 'src', 'assets', 'generated');
const TMP = path.join(ROOT, '.qa', 'render-build');
const a = process.argv.slice(2);
const onlyArg = (() => { const i = a.indexOf('--only'); return i >= 0 ? a[i + 1].split(',') : ['og', 'pdf', 'icons']; })();
const only = new Set(onlyArg);

const site = JSON.parse(fs.readFileSync(path.join(ROOT, 'site.config.json'), 'utf8'));
const { LANG_META } = await import(pathToFileURL(path.join(ROOT, 'src', 'templates', 'structure.mjs')).href);
fs.mkdirSync(GEN, { recursive: true });

// 1. Fresh private build (profile pages + textures + logo).
console.log('Building a temporary copy of the site…');
execFileSync(process.execPath, [path.join(ROOT, 'src', 'build.mjs'), '--out', TMP], { stdio: ['ignore', 'ignore', 'inherit'] });

const langs = (site.languages || ['en']).filter((l) => fs.existsSync(path.join(ROOT, 'src', 'content', `${l}.mjs`)));
const content = {};
for (const l of langs) content[l] = (await import(pathToFileURL(path.join(ROOT, 'src', 'content', `${l}.mjs`)).href)).default;

const illus = (n) => { const f = path.join(ROOT, 'src', 'assets', 'illustrations', `${n}.svg`); return fs.existsSync(f) ? fs.readFileSync(f, 'utf8').replace(/<\?xml[\s\S]*?\?>/, '') : ''; };
const logoFile = path.join(ROOT, 'src', 'assets', 'illustrations', 'logo-mark.svg');
const { FALLBACK_LOGO } = await import(pathToFileURL(path.join(ROOT, 'src', 'templates', 'icons.mjs')).href);
const logo = (fs.existsSync(logoFile) ? fs.readFileSync(logoFile, 'utf8') : FALLBACK_LOGO).replace(/<\?xml[\s\S]*?\?>/, '');
const topo = fs.readFileSync(path.join(TMP, 'assets', 'topo.svg'), 'utf8');
const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const tok = (s) => String(s ?? '').replace(/\{\{company\}\}/g, site.companyName).replace(/\{\{short\}\}/g, site.shortName).replace(/\{\{phone\}\}/g, site.contact.phone);

const fontsFor = (l) => {
  const fams = ['Archivo:wdth,wght@62..125,500..800', 'Inter:wght@400;500;600', ...(LANG_META[l]?.fonts || [])];
  return `https://fonts.googleapis.com/css2?${fams.map((f) => `family=${f}`).join('&')}&display=swap`;
};
const BASE_CSS = `
  :root { --accent: #E2A21B; }
  * { box-sizing: border-box; margin: 0; }
  body { font-family: 'Inter', 'IBM Plex Sans Arabic', 'Noto Sans SC', sans-serif; }
  :lang(ar) body, :lang(ar) .h { font-family: 'IBM Plex Sans Arabic', sans-serif; }
  :lang(zh-Hans) body { font-family: 'Inter', 'Noto Sans SC', sans-serif; }
  .h { font-family: 'Archivo', 'IBM Plex Sans Arabic', 'Noto Sans SC', sans-serif; font-stretch: 88%; }
`;

function ogHtml(l) {
  const m = LANG_META[l] || { htmlLang: l, dir: 'ltr' };
  const ui = content[l].ui;
  const pano = illus('hero-terrain');
  const art = pano ? '' : illus('crusher');
  return `<!doctype html><html lang="${m.htmlLang}" dir="${m.dir}"><head><meta charset="utf-8">
<link rel="stylesheet" href="${fontsFor(l)}">
<style>${BASE_CSS}
html, body { width: 1200px; height: 630px; overflow: hidden; }
body { background: #0F1318; color: #F3F0E9; position: relative; }
.topo { position: absolute; inset: 0; }
.topo svg { width: 100%; height: 100%; }
.bar { position: absolute; top: 0; inset-inline-start: 0; width: 180px; height: 8px; background: var(--accent); }
.top { position: absolute; top: 60px; inset-inline: 72px; display: flex; align-items: center; justify-content: space-between; }
.brand { display: flex; align-items: center; gap: 18px; }
.mark { width: 60px; height: 60px; color: #F3F0E9; }
.mark svg { width: 100%; height: 100%; }
.word { font: 800 42px/1 'Archivo', sans-serif; letter-spacing: .06em; font-stretch: 100%; }
.cap { font: 600 13px/1 'Archivo', sans-serif; letter-spacing: .24em; color: #A8AFB5; margin-top: 8px; text-transform: uppercase; }
.meta { font: 600 19px/1.5 'Archivo', sans-serif; letter-spacing: .03em; color: #A8AFB5; text-align: end; }
.meta b { color: #F3F0E9; font-weight: 600; display: block; }
.copy { position: absolute; top: 170px; inset-inline: 72px; }
.tag { font-size: 54px; line-height: 1.06; font-weight: 750; letter-spacing: -.01em; max-width: 17em; text-wrap: balance; }
:lang(ar) .tag, :lang(zh-Hans) .tag { line-height: 1.35; letter-spacing: 0; font-weight: 700; font-size: 48px; }
.line { margin-top: 18px; font-size: 22px; line-height: 1.5; color: #A8AFB5; max-width: 40em; }
.pano { position: absolute; bottom: 0; left: 0; width: 1200px; height: 250px; overflow: hidden; color: #E9E3D6; }
.pano svg { width: 1200px; height: auto; display: block; margin-top: -350px; }
.art { position: absolute; bottom: 40px; inset-inline-end: 72px; width: 380px; color: #E9E3D6; }
.art svg { width: 100%; height: auto; }
</style></head><body>
<div class="topo">${topo}</div>
${pano ? `<div class="pano">${pano}</div>` : `<div class="art">${art}</div>`}
<div class="top">
  <div class="brand"><div class="mark">${logo}</div><div><div class="word">${esc(site.shortName)}</div><div class="cap">${esc(site.companyName)}</div></div></div>
  <div class="meta"><b dir="ltr">${esc(site.siteUrl.replace(/^https?:\/\//, ''))}</b><span dir="ltr">${esc(site.contact.phone)}</span></div>
</div>
<div class="copy"><div class="tag h">${esc(tok(ui.og.tagline))}</div><p class="line">${esc(tok(ui.og.line))}</p></div>
<div class="bar"></div>
</body></html>`;
}

function iconHtml(size) {
  const padPct = size <= 48 ? 10 : 18;
  return `<!doctype html><html><head><meta charset="utf-8"><style>
html, body { margin: 0; width: ${size}px; height: ${size}px; overflow: hidden; background: #0F1318; }
.m { position: absolute; inset: ${padPct}%; color: #F6F4EF; }
.m svg { width: 100%; height: 100%; display: block; }
</style></head><body><div class="m">${logo}</div></body></html>`;
}

const browser = await launch();
const srv = await startServer(TMP, 0);
try {
  if (only.has('icons')) {
    const ctx = await browser.newContext({ deviceScaleFactor: 1 });
    const page = await ctx.newPage();
    for (const [name, size] of [['logo-512.png', 512], ['logo-192.png', 192], ['apple-touch-icon.png', 180], ['favicon-48.png', 48]]) {
      await page.setViewportSize({ width: size, height: size });
      await page.setContent(iconHtml(size));
      await page.screenshot({ path: path.join(GEN, name), omitBackground: false });
      console.log(`  icon  src/assets/generated/${name}`);
    }
    await ctx.close();
  }
  if (only.has('og')) {
    const ctx = await browser.newContext({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
    await routeFonts(ctx);
    const page = await ctx.newPage();
    for (const l of langs) {
      await page.setContent(ogHtml(l), { waitUntil: 'networkidle' });
      await page.evaluate(() => document.fonts.ready);
      await page.screenshot({ path: path.join(GEN, `og-${l}.png`) });
      console.log(`  og    src/assets/generated/og-${l}.png`);
    }
    await ctx.close();
  }
  if (only.has('pdf')) {
    const ctx = await browser.newContext({ viewport: { width: 1200, height: 900 } });
    await routeFonts(ctx);
    const page = await ctx.newPage();
    for (const l of langs) {
      const slug = (content[l].pages.profile?.slug ?? content.en.pages.profile.slug).replace(/^\/|\/$/g, '');
      const url = `${srv.url}/${l === (site.defaultLanguage || 'en') ? '' : l + '/'}${slug}/`;
      await page.goto(url, { waitUntil: 'networkidle' });
      await page.evaluate(() => document.fonts.ready);
      await page.emulateMedia({ media: 'print' });
      await page.pdf({ path: path.join(GEN, `etahg-company-profile-${l}.pdf`), format: 'A4', printBackground: true, preferCSSPageSize: true });
      const pages = (fs.readFileSync(path.join(GEN, `etahg-company-profile-${l}.pdf`), 'latin1').match(/\/Type\s*\/Page[^s]/g) || []).length;
      console.log(`  pdf   src/assets/generated/etahg-company-profile-${l}.pdf (${pages} page${pages === 1 ? '' : 's'})`);
    }
    await ctx.close();
  }
} finally {
  await srv.close();
  await browser.close();
}
console.log('Done. Now rebuild the site: node src/build.mjs');
