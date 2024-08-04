'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    const normalizedURL = new URL(
      req.url.replace('//', '/'),
      'http://localhost:5701',
    );

    const parts = normalizedURL.pathname.slice(1).split('/');
    const query = {};

    normalizedURL.searchParams.forEach((value, key) => {
      query[key] = value ?? '';
    });

    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify({ parts, query }));
    res.end();
  });

  return server;
}

module.exports = {
  createServer,
};
