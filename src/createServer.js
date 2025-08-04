'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    const normalizedURL = new URL(req.url, `http://${req.headers.host}`);
    const parts = normalizedURL.pathname.split('/').filter(Boolean);
    const query = Object.fromEntries(normalizedURL.searchParams.entries());

    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify({ parts, query }));
  });

  return server;
}

module.exports = {
  createServer,
};
