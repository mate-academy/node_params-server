/* eslint-disable no-console */
'use strict';

const http = require('http');
const { PORT } = require('./constant');

function createServer() {
  const server = http.createServer((req, res) => {
    res.setHeader('Content-type', 'application/json');

    const normalizedUrl = new URL(
      req.url.replace(/\/\//g, '/'),
      `http://localhost:${PORT}`,
    );

    const query = Object.fromEntries(normalizedUrl.searchParams.entries());

    const pathname = normalizedUrl.pathname;
    const parts = pathname.split('/').filter((part) => part);

    try {
      res.statusCode = 200;

      const respBody = {
        parts,
        query,
      };

      res.end(JSON.stringify(respBody));
    } catch (error) {
      res.statusCode = 400;
      console.error(error);
    }
  });

  return server;
}

module.exports = {
  createServer,
};
