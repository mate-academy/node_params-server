'use strict';

const http = require('node:http');

const PORT = process.env.PORT || 5701;

function createServer() {
  const server = http.createServer((req, res) => {
    const baseUrl = new URL(req.url, `http://localhost:${PORT}`);
    const query = Object.fromEntries(baseUrl.searchParams.entries());

    const parts = baseUrl.pathname.split('/').filter(Boolean);

    const response = { parts, query };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response, null, 2));
  });

  return server;
}

module.exports = { createServer };
