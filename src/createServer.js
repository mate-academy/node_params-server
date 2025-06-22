/* eslint-disable no-console */
'use strict';

const http = require('node:http');

function createServer() {
  return http.createServer((req, res) => {
    const normalized = new URL(req.url, `http://${req.headers.host}`);

    const parts = normalized.pathname
      .split('/')
      .filter((part) => part.length > 0);

    const query = Object.fromEntries(normalized.searchParams.entries());

    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify({ parts, query }));
  });
}

module.exports = { createServer };
