// Shared Playwright helper for tools (screenshots, OG images, PDF export).
// Uses the globally installed Playwright; never runs 'playwright install'.
// Google Fonts requests are fetched by curl (which trusts the environment's CA
// bundle and proxy settings) and cached in .qa/font-cache, so rendering shows
// the real brand fonts even where the browser itself cannot reach the network.
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CACHE = path.join(ROOT, '.qa', 'font-cache');
const UA = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36';

export function loadPlaywright() {
  if (!process.env.PLAYWRIGHT_BROWSERS_PATH && fs.existsSync('/opt/pw-browsers')) process.env.PLAYWRIGHT_BROWSERS_PATH = '/opt/pw-browsers';
  const tries = [process.env.NODE_PATH, '/opt/node22/lib/node_modules/', path.join(ROOT, 'node_modules/')].filter(Boolean);
  for (const t of tries) {
    try { return createRequire(t.endsWith('/') ? t : t + '/')('playwright'); } catch { /* next */ }
  }
  throw new Error('Playwright not found. Set NODE_PATH to the folder containing the global playwright module.');
}

function cachedFetch(url) {
  fs.mkdirSync(CACHE, { recursive: true });
  const key = crypto.createHash('sha1').update(url).digest('hex');
  const f = path.join(CACHE, key);
  if (fs.existsSync(f)) return fs.readFileSync(f);
  const buf = execFileSync('curl', ['-sSfL', '--compressed', '-A', UA, '--max-time', '30', url], { maxBuffer: 64 * 1024 * 1024 });
  fs.writeFileSync(f, buf);
  return buf;
}

export async function routeFonts(context) {
  await context.route(/^https:\/\/fonts\.(googleapis|gstatic)\.com\//, async (route) => {
    const url = route.request().url();
    try {
      const body = cachedFetch(url);
      const type = url.includes('googleapis') ? 'text/css; charset=utf-8' : url.endsWith('.woff2') ? 'font/woff2' : 'font/ttf';
      await route.fulfill({ status: 200, body, headers: { 'content-type': type, 'access-control-allow-origin': '*' } });
    } catch {
      await route.abort();
    }
  });
}

export async function launch() {
  const { chromium } = loadPlaywright();
  const browser = await chromium.launch({ args: ['--disable-gpu', '--no-sandbox', '--font-render-hinting=none'] });
  return browser;
}
