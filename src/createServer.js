/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    const normalizedURL = new URL(req.url.replace(/\/{2,}/g, '/'),
      `http://${req.headers.host}`);
    const query = Object.fromEntries(normalizedURL.searchParams.entries());
    const parts = normalizedURL.pathname.split('/').filter(part => part !== '');

    const responseData = {
      parts,
      query,
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });

    res.end(JSON.stringify(responseData));
  });

  return server;
}

module.exports = {
  createServer,
};
