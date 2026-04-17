/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    const normalizedUrl = new URL(req.url, 'http://localhost:5700');

    const parts = normalizedUrl.pathname.slice(1).split('/').filter(Boolean);
    const query = Object.fromEntries(normalizedUrl.searchParams);

    res.writeHead(200, 'OK', { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ parts, query }));
  });
}

module.exports = {
  createServer,
};
