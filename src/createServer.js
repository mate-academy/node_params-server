/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);

    // Split pathname, ignore empty parts (handles doubled slashes)
    const parts = url.pathname.split('/').filter(Boolean);

    // Convert query params to a plain object
    const query = Object.fromEntries(url.searchParams.entries());

    const response = {
      parts,
      query,
    };

    res.writeHead(200, {
      'Content-Type': 'application/json',
    });

    res.end(JSON.stringify(response, null, 2));
  });

  return server;
}

module.exports = {
  createServer,
};
