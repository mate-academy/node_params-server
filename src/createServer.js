/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    const { pathname, searchParams } = new URL(req.url, 'http://localhost');
    const parts = pathname.split('/').filter(Boolean);
    const params = Object.fromEntries(searchParams.entries());

    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;

    res.end(
      JSON.stringify({
        parts,
        query: params,
      }),
    );
  });

  return server;
}

module.exports = {
  createServer,
};
