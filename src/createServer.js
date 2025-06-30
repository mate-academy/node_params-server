/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    const url = new URL(req.url || '', `http://${req.headers.host}`);

    const pathname = url.pathname.slice(1);
    const query = Object.fromEntries(url.searchParams);

    const parts = pathname.split('/').filter((part) => part !== '');

    const response = {
      parts,
      query,
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });

    res.end(JSON.stringify(response));
  });

  return server;
}

module.exports = {
  createServer,
};
