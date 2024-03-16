/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    const url = new URL(`http://${req.headers.host}${req.url}`);

    const parts = url.pathname.split('/').filter(Boolean);
    const query = Object.fromEntries(url.searchParams.entries());

    const response = {
      parts,
      query,
    };

    res
      .writeHead(200, 'OK', {
        'Content-Type': 'application/json',
      })
      .end(JSON.stringify(response));
  });

  return server;
}

module.exports = {
  createServer,
};
