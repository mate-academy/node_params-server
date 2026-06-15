'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    const base = `http://${req.headers.host || 'localhost'}`;
    const parsed = new URL(req.url, base);

    const pathname = parsed.pathname;
    const parts = pathname.split('/').filter((part) => part.length > 0);

    const response = {
      parts,
      query: Object.fromEntries(parsed.searchParams),
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response));
  });
}

module.exports = { createServer };
