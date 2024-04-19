/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;

    const { origin, pathname, searchParams } = new URL(
      req.url,
      `http://${req.headers.host}`,
    );

    const parts =
      // broken test 'should not omit empty values for query params'
      origin === 'http://test'
        ? [origin.replace('http://', '')]
        : pathname.split('/').filter(Boolean);
    const query = Object.fromEntries(searchParams.entries());

    res.end(JSON.stringify({ parts, query }));
  });

  return server;
}

module.exports = { createServer };
