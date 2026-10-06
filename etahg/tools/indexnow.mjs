#!/usr/bin/env node
// Submits URLs to IndexNow (Bing, Yandex, Naver, Seznam, Yep share one endpoint; Google does not take part).
//   node tools/indexnow.mjs                      all URLs of docs/sitemap.xml
//   node tools/indexnow.mjs --sitemap docs/sitemap.xml
//   node tools/indexnow.mjs --urls https://www.etahg.com/ https://www.etahg.com/fr/
//   node tools/indexnow.mjs --dry-run            print the payload, send nothing
// The key comes from site.config.json "indexNowKey" (or the INDEXNOW_KEY environment variable);
// the build writes docs/<key>.txt, which the endpoint fetches to prove ownership.
// Exit code: 0 on HTTP 200/202, 1 otherwise. Needs Node 18+ (global fetch).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const a = process.argv.slice(2);
const get = (k, d) => { const i = a.indexOf(k); return i >= 0 ? a[i + 1] : d; };
const site = JSON.parse(fs.readFileSync(path.join(ROOT, 'site.config.json'), 'utf8'));
const SITE = String(site.siteUrl).replace(/\/+$/, '');
const host = new URL(SITE).host;
const key = process.env.INDEXNOW_KEY || site.indexNowKey;
if (!key || !/^[A-Za-z0-9-]{8,128}$/.test(key)) { console.error('No valid IndexNow key: set site.config.json "indexNowKey" (8-128 chars of [a-zA-Z0-9-]) or INDEXNOW_KEY.'); process.exit(1); }

let urls = [];
const ui = a.indexOf('--urls');
if (ui >= 0) urls = a.slice(ui + 1).filter((u) => /^https?:/.test(u));
else {
  const sm = path.resolve(get('--sitemap', path.join(ROOT, 'docs', 'sitemap.xml')));
  if (!fs.existsSync(sm)) { console.error(`sitemap not found: ${sm} (build first)`); process.exit(1); }
  urls = [...fs.readFileSync(sm, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(/&amp;/g, '&'));
}
urls = [...new Set(urls)].filter((u) => { try { return new URL(u).host === host; } catch { return false; } });
if (!urls.length) { console.error('No URLs to submit.'); process.exit(1); }
if (urls.length > 10000) { console.warn(`IndexNow accepts 10,000 URLs per request; sending the first 10,000 of ${urls.length}.`); urls = urls.slice(0, 10000); }

const payload = { host, key, keyLocation: `${SITE}/${key}.txt`, urlList: urls };
console.log(`IndexNow: ${urls.length} URL(s) for ${host}, key file ${payload.keyLocation}`);
if (a.includes('--dry-run')) { console.log(JSON.stringify(payload, null, 2)); process.exit(0); }

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(payload),
});
const MEANING = { 200: 'OK', 202: 'Accepted (key will be validated)', 400: 'Bad request (invalid format)', 403: 'Forbidden (key not valid / key file not found)', 422: 'Unprocessable (URLs do not belong to the host or key mismatch)', 429: 'Too many requests' };
console.log(`HTTP ${res.status} ${MEANING[res.status] || res.statusText}`);
const text = await res.text();
if (text.trim()) console.log(text.slice(0, 500));
process.exit(res.status === 200 || res.status === 202 ? 0 : 1);
