/* eslint-disable no-console */
'use strict';

const http = require('http');

const PORT = 5700;

function createServer() {
  const server = http.createServer((req, res) => {
    console.log('req >>', req.url);

    const normalizedUrl = new URL(
      req.url.replace(/\/\//g, '/'),
      `http://localhost:${PORT}`,
    );

    const parts = normalizedUrl.pathname
      .split('/')
      .filter((part) => part !== '');

    const searchParams = normalizedUrl.searchParams;

    const queryParams = {};

    for (const [key, value] of searchParams.entries()) {
      if (!value) {
        queryParams[key] = '';
      } else {
        queryParams[key] = value;
      }
    }

    const response = {
      parts: parts,
      query: queryParams,
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });

    res.end(JSON.stringify(response));
  });

  return server;
}

module.exports = {
  createServer,
  PORT,
};
