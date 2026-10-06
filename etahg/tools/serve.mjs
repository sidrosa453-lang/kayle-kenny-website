#!/usr/bin/env node
// Static preview server.  node tools/serve.mjs [--dir docs] [--port 5544] [--live]
// --live mimics the production host (GitHub Pages): gzip for text assets and
// Cache-Control: max-age=600, so Lighthouse numbers are comparable with the live site.
// Also exported as startServer() for screenshot / render tools (port 0 = free port).
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const TYPES = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp',
  '.ico': 'image/x-icon', '.pdf': 'application/pdf', '.txt': 'text/plain; charset=utf-8', '.xml': 'application/xml; charset=utf-8',
  '.json': 'application/json', '.webmanifest': 'application/manifest+json', '.vcf': 'text/vcard; charset=utf-8', '.gif': 'image/gif',
  '.woff2': 'font/woff2', '.woff': 'font/woff',
};
const COMPRESSIBLE = /^(text\/|application\/(json|xml|manifest|javascript)|image\/svg)/;

export function startServer(dir, port = 0, { quiet = true, live = false } = {}) {
  const base = path.resolve(dir);
  const server = http.createServer((req, res) => {
    let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    let f = path.join(base, p);
    if (!f.startsWith(base)) { res.writeHead(403); return res.end(); }
    if (fs.existsSync(f) && fs.statSync(f).isDirectory()) {
      if (!p.endsWith('/')) { res.writeHead(301, { Location: p + '/' }); return res.end(); }
      f = path.join(f, 'index.html');
    }
    let status = 200;
    if (!fs.existsSync(f)) { status = 404; f = path.join(base, '404.html'); }
    if (!fs.existsSync(f)) { res.writeHead(404); return res.end('Not found'); }
    const type = TYPES[path.extname(f).toLowerCase()] || 'application/octet-stream';
    const headers = { 'Content-Type': type, 'Cache-Control': live ? 'max-age=600' : 'no-store' };
    const gzip = live && COMPRESSIBLE.test(type) && /\bgzip\b/.test(req.headers['accept-encoding'] || '');
    if (gzip) { headers['Content-Encoding'] = 'gzip'; headers.Vary = 'Accept-Encoding'; }
    res.writeHead(status, headers);
    const stream = fs.createReadStream(f);
    if (gzip) stream.pipe(zlib.createGzip({ level: 6 })).pipe(res); else stream.pipe(res);
    if (!quiet) console.log(status, p);
  });
  return new Promise((resolve) => server.listen(port, '127.0.0.1', () => resolve({ server, port: server.address().port, url: `http://127.0.0.1:${server.address().port}`, close: () => new Promise((r) => server.close(r)) })));
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const a = process.argv.slice(2);
  const get = (k, d) => { const i = a.indexOf(k); return i >= 0 ? a[i + 1] : d; };
  const dir = path.resolve(get('--dir', path.join(ROOT, 'docs')));
  const port = Number(get('--port', 5544));
  const live = a.includes('--live');
  startServer(dir, port, { quiet: false, live }).then((s) => console.log(`Serving ${dir} at http://localhost:${s.port}/${live ? '  (live mode: gzip + max-age=600)' : ''}  (Ctrl+C to stop)`));
}
