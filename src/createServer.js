/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    const normalizedUrl = new URL(
      req.url.replace(/\/{2,}/g, '/'),
      `http://${req.headers.host}`,
    );

    const parts = normalizedUrl.pathname
      .slice(1)
      .split('/')
      .filter((part) => part !== '');
    const query = Object.fromEntries(normalizedUrl.searchParams.entries());

    res
      .writeHead(200, 'ok', { 'Content-Type': 'application/json' })
      .end(JSON.stringify({ parts, query }));
  });
}

module.exports = {
  createServer,
};
