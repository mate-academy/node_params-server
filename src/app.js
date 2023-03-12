'use strict';

const http = require('http');
const getQuery = require('./getQuery');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  const normalizedURL = new URL(req.url, `http//${req.headers.host}`);
  const parts = normalizedURL.pathname.slice(1).split('/');
  const searchParams = normalizedURL.searchParams;
  const query = getQuery(searchParams);

  res.end(JSON.stringify({
    parts,
    query,
  }));
});

server.listen(3000);

module.exports = { server };
