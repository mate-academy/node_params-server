/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    const normalizedURL = new URL(
      req.url.replaceAll('//', '/'),
      `http://${req.headers.host}`,
    );

    const parts = normalizedURL.pathname
      .split('/')
      .filter((part) => part !== '');

    const query = Object.fromEntries(normalizedURL.searchParams.entries());

    const data = {
      parts,
      query,
    };

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
  });

  return server;
}

module.exports = {
  createServer,
};
