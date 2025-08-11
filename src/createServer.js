/* eslint-disable no-console */
'use strict';

const http = require('http');

const BASE_URL = 'http://localhost:5701';

function createServer() {
  /* Write your code here */
  // Return instance of http.Server class
  const server = http.createServer((req, res) => {
    const preparedUrl = req.url.replace(/\/+/g, '/');
    const normalizedUrl = new URL(preparedUrl, BASE_URL);

    const pathname = normalizedUrl.pathname.slice(1);
    const pathnameArray = pathname.split('/');

    const queryObject = Object.fromEntries(
      normalizedUrl.searchParams.entries(),
    );

    const result = JSON.stringify({
      parts: pathnameArray,
      query: queryObject,
    });

    res.setHeader('Content-Type', 'application/json');
    res.end(result);
  });

  return server;
}

module.exports = {
  createServer,
};
