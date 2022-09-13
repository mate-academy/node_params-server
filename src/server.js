'use strict';

const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  const normalizedURL = new url.URL(req.url, `http://${req.headers.host}`);
  const parts = normalizedURL.pathname.slice(1).split('/');
  const query = Object.fromEntries(normalizedURL.searchParams.entries());

  res.write(JSON.stringify({
    parts,
    query,
  }));

  res.end();
});

module.exports = server;
