/* Tiny static server for local preview: node serve.js [port] */
const http = require('http');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const port = Number(process.argv[2]) || 5533;
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.json': 'application/json',
};

http
  .createServer((req, res) => {
    let urlPath;
    try {
      urlPath = decodeURIComponent(req.url.split('?')[0]);
    } catch (e) {
      res.writeHead(400);
      return res.end('Bad request');
    }
    const file = path.normalize(path.join(root, urlPath === '/' ? 'index.html' : urlPath));
    // Separator-bounded containment check: "root-sibling-dir/..." must not pass.
    if (file !== root && !file.startsWith(root + path.sep)) {
      res.writeHead(403);
      return res.end('Forbidden');
    }
    fs.readFile(file, (err, data) => {
      if (err) {
        res.writeHead(404);
        return res.end('Not found');
      }
      res.writeHead(200, { 'Content-Type': types[path.extname(file).toLowerCase()] || 'application/octet-stream' });
      res.end(data);
    });
  })
  .listen(port, '127.0.0.1', () => console.log(`Kayle Kenny site running at http://localhost:${port}`));
