/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    const normalizedUrl = new URL(
      req.url.replace(/\/\/+/g, '/'),
      'http://localhost:5701',
    );

    const parts = normalizedUrl.pathname.slice(1).split('/');
    const query = {};

    normalizedUrl.searchParams.forEach((value, key) => {
      query[key] = value;
    });

    res.setHeader('content-type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify({ parts, query }));
  });

  return server;
}

module.exports = {
  createServer,
};
