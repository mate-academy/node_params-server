/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    const normalizedUrl = new URL(
      req.url.replace(/\/{2,}/g, '/'),
      `http://${req.headers.host}`,
    );
    const query = Object.fromEntries(normalizedUrl.searchParams.entries());
    const parts = normalizedUrl.pathname
      .split('/')
      .filter((part) => part !== '');

    const data = {
      query,
      parts,
    };

    res.writeHead(200, 'OK', { 'content-type': 'application/json' });
    res.end(JSON.stringify(data));
  });
}

module.exports = {
  createServer,
};
