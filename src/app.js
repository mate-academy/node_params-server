'use strict';

const http = require('http');
const { normalizeSearchParams } = require('./normalizeSearchParams');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  const normalizedURL = new URL(req.url, `http://${req.headers.host}`);
  const pathName = normalizedURL.pathname.slice(1);
  const parts = pathName.split('/');
  const searchParams = normalizedURL.search.slice(1);
  const query = normalizeSearchParams(searchParams);

  res.end(JSON.stringify({
    parts,
    query,
  }));
});

server.listen(PORT);

module.exports = server;
