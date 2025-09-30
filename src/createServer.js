/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  /* Write your code here */
  // Return instance of http.Server class
  const server = http.createServer((req, res) => {
    const [path, queryString] = req.url.split('?');
    const params = new URLSearchParams(queryString);

    const normalizeParts = path.slice(1).startsWith('/')
      ? path.slice(2).split('/')
      : path.slice(1).split('/');

    const normalizeQuery = Object.fromEntries(params.entries());

    res.statusCode = 200;
    res.statusMessage = 'OK';
    res.setHeader('Content-Type', 'application/json');

    res.end(
      JSON.stringify({
        parts: normalizeParts,
        query: normalizeQuery,
      }),
    );
  });

  return server;
}

module.exports = {
  createServer,
};
