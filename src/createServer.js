/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    const normalizedUrl = new URL(req.url, `http://${req.headers.host}`);

    const parts = normalizedUrl.pathname
      .split('/')
      .filter((part) => part !== '');

    const query = Object.fromEntries(normalizedUrl.searchParams.entries());

    const result = {
      parts,
      query,
    };

    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify(result));
  });
}

module.exports = {
  createServer,
};
