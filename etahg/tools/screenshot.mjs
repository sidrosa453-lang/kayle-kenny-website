#!/usr/bin/env node
// Full-page screenshots of a built site.
//   node tools/screenshot.mjs --dir DIR --pages /,/services/,/contact/ --widths 390,1440 --out .qa/screens/NAME
// Starts its own static server on a free port. Output: <out>/<page-slug>-<width>.png
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { startServer } from './serve.mjs';
import { launch, routeFonts } from './browser.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const a = process.argv.slice(2);
const get = (k, d) => { const i = a.indexOf(k); return i >= 0 ? a[i + 1] : d; };
const dir = path.resolve(get('--dir', path.join(ROOT, 'docs')));
const pages = get('--pages', '/').split(',').map((s) => s.trim()).filter(Boolean);
const widths = get('--widths', '390,1440').split(',').map(Number);
const out = path.resolve(get('--out', path.join(ROOT, '.qa', 'screens', 'latest')));
const full = !a.includes('--viewport');
const heightArg = Number(get('--height', 0));
const segment = Number(get('--segment', 0)); // also save the full page in slices of this height

fs.mkdirSync(out, { recursive: true });
const srv = await startServer(dir, 0);
const browser = await launch();
try {
  for (const w of widths) {
    const context = await browser.newContext({ viewport: { width: w, height: heightArg || (w < 700 ? 844 : 900) }, deviceScaleFactor: 1, reducedMotion: 'reduce' });
    await routeFonts(context);
    const page = await context.newPage();
    for (const p of pages) {
      await page.goto(srv.url + p, { waitUntil: 'networkidle' });
      await page.evaluate(() => document.fonts.ready);
      await page.waitForTimeout(150);
      const name = (p.replace(/^\/|\/$/g, '').replace(/[^\w-]+/g, '_') || 'home') + `-${w}.png`;
      await page.screenshot({ path: path.join(out, name), fullPage: full });
      if (segment > 0) {
        const H = await page.evaluate(() => document.documentElement.scrollHeight);
        for (let y = 0, i = 1; y < H; y += segment, i++) {
          await page.screenshot({ path: path.join(out, name.replace(/\.png$/, `-part${i}.png`)), fullPage: true, clip: { x: 0, y, width: w, height: Math.min(segment, H - y) } });
        }
      }
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      console.log(`${name}${overflow > 0 ? `  WARNING horizontal overflow ${overflow}px` : ''}`);
    }
    await context.close();
  }
} finally {
  await browser.close();
  await srv.close();
}
console.log(`Screenshots in ${path.relative(process.cwd(), out)}`);
