/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    res.setHeader('Content-type', 'application/json');

    const normalizedUrl = new URL(req.url, 'http://localhost:5701');

    const query = Object.fromEntries(normalizedUrl.searchParams.entries());
    const urlParams = req.url.split('?')[0];
    const parts = urlParams.split('/').filter((part) => part);

    try {
      res.statusCode = 200;

      const respBody = {
        parts,
        query,
      };

      res.end(JSON.stringify(respBody));
    } catch (error) {
      res.statusCode = 400;
      res.end(JSON.stringify({ errors: [{ message: error.message }] }));
    }
  });

  return server;
}

module.exports = {
  createServer,
};
