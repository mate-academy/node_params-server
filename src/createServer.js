/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);

    const parts = url.pathname.split('/').filter((part) => part !== '');
    const queryParams = Object.fromEntries(url.searchParams.entries());

    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;

    res.end(
      JSON.stringify({
        parts,
        query: queryParams,
      }),
    );
  });

  return server;
}

module.exports = {
  createServer,
};
