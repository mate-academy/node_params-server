/* eslint-disable no-console */
'use strict';

const http = require('http');

const createServer = () =>
  http.createServer((req, res) => {
    const normalizedURL = new URL(req.url, 'http://localhost:5701');
    const parts = normalizedURL.pathname
      .split('/')
      .filter((part) => part.length > 0);
    const query = Object.fromEntries(normalizedURL.searchParams.entries());

    res.setHeader('Content-type', 'application/json');

    const resBody = JSON.stringify({ parts, query });

    res.end(resBody);
  });

createServer().listen(5701);

module.exports = {
  createServer,
};
