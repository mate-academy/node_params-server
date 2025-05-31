/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    const url = new URL(req.url || '', `http://${req.headers.host}`);
    const parts =
      url.pathname
        .slice(1)
        .split('/')
        .filter((part) => part.length > 0) || [];
    const query = Object.fromEntries(url.searchParams.entries()) || {};

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
