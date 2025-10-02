/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    const url = new URL(req.url, 'http://localhost');
    const relativePath = url.pathname;
    const query = Object.fromEntries(url.searchParams);
    const parts = relativePath.split('/').filter(Boolean);

    const response = {
      parts,
      query,
    };

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
  });

  return server;
}

module.exports = {
  createServer,
};
