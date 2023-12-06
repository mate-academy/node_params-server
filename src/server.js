'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    const url = new URL(req.url, 'http://localhost:5700');
    const parts = url.pathname.split('/').slice(1);
    const query = Object.fromEntries(url.searchParams.entries());
    const data = {
      parts, query,
    };

    res.end(JSON.stringify(data));
  });
}

module.exports = { createServer };
