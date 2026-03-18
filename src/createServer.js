/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });

    const url = new URL(req.url, 'http://localhost');

    res.end(
      JSON.stringify({
        parts: url.pathname.split('/').filter(Boolean),
        query: Object.fromEntries(url.searchParams.entries()),
      }),
    );
  });

  return server;
}

module.exports = {
  createServer,
};
