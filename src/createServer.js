/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);

    const parts = parsedUrl.pathname.split('/').filter((part) => part !== '');

    const query = Object.fromEntries(parsedUrl.searchParams.entries());

    const response = {
      parts: parts,
      query: query,
    };

    res.setHeader('Content-Type', 'application/json');

    res.end(JSON.stringify(response));
  });

  return server;
}

module.exports = {
  createServer,
};
