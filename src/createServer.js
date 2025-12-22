/* eslint-disable no-console */
'use strict';

const http = require('http');

const getParts = (path) => path.split('/').filter((part) => part);

function createServer() {
  const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    const url = new URL(req.url, `http://${req.headers.host}`);
    const parts = getParts(url.pathname);
    const query = Object.fromEntries(url.searchParams.entries());

    const result = {
      parts,
      query,
    };

    res.end(JSON.stringify(result));
  });

  return server;
}

module.exports = {
  createServer,
};
