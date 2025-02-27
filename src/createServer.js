/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);

    const parts = parsedUrl.pathname
      .split('/')
      .filter((part) => part)
      .map(decodeURIComponent);

    const query = {};

    parsedUrl.searchParams.forEach((value, key) => {
      query[key] = value;
    });

    const response = {
      parts,
      query,
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response));
  });
}

module.exports = {
  createServer,
};
