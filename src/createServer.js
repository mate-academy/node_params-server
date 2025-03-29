/* eslint-disable no-console */
'use strict';

const http = require('node:http');

function createServer() {
  const server = http.createServer((req, res) => {
    const url = new URL(req.url.slice(1), `http://${req.headers.host}`);
    const parts = url.pathname.split('/').filter((v) => v);
    const search = url.searchParams.entries();
    const query = Object.fromEntries(Array.from(search));

    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify({ parts, query }));
  });

  return server;
}

module.exports = {
  createServer,
};
