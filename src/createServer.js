/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    const parsedUrl = new URL(req.url || '', `http://${req.headers.host}`);
    const parts = parsedUrl.pathname.split('/').filter(Boolean);
    const obj = Object.fromEntries(parsedUrl.searchParams.entries());

    const result = {
      parts: parts,
      query: obj,
    };

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result));
  });

  return server;
}

module.exports = {
  createServer,
};
