'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    const normilizedURL = new URL(req.url, `http://${req.headers.host}`);
    const query = Object.fromEntries(normilizedURL.searchParams.entries());
    const parts = normilizedURL.pathname.slice(1).split('/');

    const result = {
      parts,
      query,
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  });

  return server;
}

module.exports = { createServer };
