/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    const parsedUrl = new URL(req.url, 'http://localhost');
    const parts = parsedUrl.pathname.split('/').filter(Boolean);
    const query = Object.fromEntries(parsedUrl.searchParams.entries());
    const result = { parts, query };

    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify(result));
  });

  return server;
}

module.exports = {
  createServer,
};
