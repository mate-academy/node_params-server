/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    const url = new URL(req.url || '', `http://${req.headers.host}`);

    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;

    const parts = url.pathname.slice(1);

    const preparedParts = parts.split('/').filter((el) => el !== '');
    const query = Object.fromEntries(url.searchParams.entries());

    const response = {
      parts: preparedParts,
      query,
    };

    res.end(JSON.stringify(response));
  });

  return server;
}

module.exports = {
  createServer,
};
