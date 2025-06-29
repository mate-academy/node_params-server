/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    const normalizedPath = req.url.replace('//', '/');
    const normalizedURL = new URL(normalizedPath, 'http://localhost:5701');

    const parts = normalizedURL.pathname.slice(1).split('/');
    const query = Object.fromEntries(normalizedURL.searchParams.entries());

    res.statusCode = 200;
    res.setHeader('content-type', 'application/json');

    res.end(
      JSON.stringify({
        parts,
        query,
      }),
    );
  });

  return server;
}

module.exports = {
  createServer,
};
