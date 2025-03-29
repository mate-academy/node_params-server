/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    const normalizedURL = new URL(`http://${req.headers.host}${req.url}`);

    const parts = normalizedURL.pathname.split('/').filter((part) => part);
    const query = Object.fromEntries(normalizedURL.searchParams.entries());

    res.writeHead(200, { 'Content-Type': 'application/json' });

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
