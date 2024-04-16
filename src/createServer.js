/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    const normalizedUrl = new URL(
      req.url.replace(/\/{2,}/g, '/'),
      `http://${req.headers.host}`,
    );
    const parts = normalizedUrl.pathname
      .split('/')
      .filter((part) => part !== '');

    const query = Object.fromEntries(normalizedUrl.searchParams.entries());

    const resObject = {
      parts,
      query,
    };

    res.writeHead(200, 'OK', { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(resObject));
  });

  return server;
}

module.exports = {
  createServer,
};
