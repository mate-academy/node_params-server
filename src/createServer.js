/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);

    const parts = url.pathname.split('/').filter(Boolean);

    const query = Object.fromEntries(url.searchParams.entries());

    const result = { parts, query };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  });

  return server;
  // Return instance of http.Server class
}

module.exports = {
  createServer,
};
