'use strict';

const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  const normalizedURL = new URL(req.url, `http//${req.headers.host}`);
  const parts = normalizedURL.pathname.slice(1).split('/');
  const query = Object.fromEntries(normalizedURL.searchParams.entries());

  res.end(JSON.stringify({
    parts,
    query,
  }));
});

server.listen(3000);

module.exports = { server };
