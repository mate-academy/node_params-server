/* eslint-disable no-console */
'use strict';

const http = require('node:http');

function createServer() {
  const server = http.createServer((req, res) => {
    const parsedUrl = new URL(req.url, 'http://localhost');
    const pathName = parsedUrl.pathname;
    const query = Object.fromEntries(parsedUrl.searchParams);
    const parts = pathName.split('/').filter((part) => part !== '');

    res.setHeader('Content-Type', 'application/json');

    const result = {
      parts,
      query,
    };

    res.end(JSON.stringify(result));
  });

  return server;
}

module.exports = {
  createServer,
};
