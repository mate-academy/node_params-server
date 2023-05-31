/* eslint-disable max-len */
'use strict';

const http = require('http');

const createServer = () => {
  const server = http.createServer((req, res) => {
    const normalizedURL = new URL(req.url, `http://${req.headers.host}`);
    const searchParams = Object.fromEntries(normalizedURL.searchParams.entries());
    const pathName = normalizedURL.pathname.slice(1).split('/');
    const result = JSON.stringify({
      parts: pathName,
      query: searchParams,
    });

    res.end(result);
  });

  return server;
};

createServer();

module.exports.createServer = createServer;
