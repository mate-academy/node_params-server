/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    const url = new URL(
      req.url.replace(/\/\//g, ''),
      `http://${req.headers.host}`,
    );

    res.setHeader('Content-Type', 'application/json');
    res.statusCode = '200';
    res.statusMessage = 'OK';

    res.end(
      JSON.stringify({
        parts: url.pathname.slice(1).split('/'),
        query: Object.fromEntries(url.searchParams.entries()),
      }),
    );
  });

  return server;
}

module.exports = {
  createServer,
};
