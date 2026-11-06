/* eslint-disable no-console */
'use strict';

const http = require('node:http');

function createServer() {
  const httpServer = http.createServer((req, res) => {
    const partOfRequest = new URL(req.url, 'http://localhost');

    const pathname = partOfRequest.pathname;
    const searchParams = partOfRequest.searchParams;

    const parts = pathname.split('/').filter(Boolean);
    const query = Object.fromEntries(searchParams.entries());

    res.writeHead(200, {
      'Content-type': 'application/json',
    });

    res.end(JSON.stringify({ parts, query }));
  });

  return httpServer;
}

module.exports = {
  createServer,
};
