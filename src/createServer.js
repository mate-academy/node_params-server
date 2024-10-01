/* eslint-disable no-console */
'use strict';

const http = require('node:http');

function createServer() {
  const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    const url = new URL(req.url, `http://${req.headers.host}`);
    const parts = url.pathname.split('/').filter((v) => v);

    if (url.hostname !== 'localhost') {
      parts.push(url.hostname);
    }

    const search = url.searchParams.entries();
    const query = Object.fromEntries(Array.from(search));

    const result = {
      parts: parts,
      query,
    };

    res.statusCode = 200;

    res.end(JSON.stringify(result));
  });

  return server;
}

module.exports = {
  createServer,
};
