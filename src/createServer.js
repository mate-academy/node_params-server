/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    const normalizedURL = new URL(req.url, 'http://localhost:5700');
    const parts = normalizedURL.pathname
      .split('/')
      .filter((part) => part !== '');
    const query = Object.fromEntries(normalizedURL.searchParams.entries());

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ parts, query }));
  });

  return server;
}

module.exports = {
  createServer,
};
