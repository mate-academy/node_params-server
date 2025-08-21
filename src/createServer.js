/* eslint-disable no-console */
'use strict';

const http = require('node:http');

function createServer() {
  return http.createServer((req, res) => {
    res.setHeader('Content-type', 'application/json');

    const normalizedURL = req.url.split('?');
    const parts = normalizedURL[0]
      .split('/')
      .filter(Boolean)
      .map(decodeURIComponent);
    const params = new URLSearchParams(normalizedURL[1]);

    const query = Object.fromEntries(params.entries());

    res.end(JSON.stringify({ parts, query }));
  });
}

module.exports = {
  createServer,
};
