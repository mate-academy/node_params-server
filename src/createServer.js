/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    const url = new URL(req.url || '', `http://${req.headers.host}`);
    const requestedPath = url.pathname.slice(1);

    const parts = requestedPath.split('/').filter(Boolean);
    const query = Object.fromEntries(url.searchParams.entries());

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ parts, query }));
  });

  return server;
}

module.exports = {
  createServer,
};
