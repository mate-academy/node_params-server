/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    const url = new URL(req.url || '', `http://${req.headers.host}`);

    const pathname = url.pathname;

    const parts = pathname.split('/').filter(Boolean);

    const query = Object.fromEntries(url.searchParams);

    res.setHeader('Content-Type', 'application/json');

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
