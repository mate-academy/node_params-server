/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    const fullUrl = new URL(req.url, 'http://localhost');
    const fullPath =
      fullUrl.host === 'localhost'
        ? fullUrl.pathname
        : `/${fullUrl.host}${fullUrl.pathname}`;
    const parts = fullPath.split('/').filter(Boolean);
    const query = Object.fromEntries(fullUrl.searchParams);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ parts, query }));
  });

  return server;
}

module.exports = {
  createServer,
};
