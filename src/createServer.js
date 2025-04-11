/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);

    const parts = url.pathname.split('/').filter(Boolean);

    const query = {};

    for (const [key, value] of url.searchParams.entries()) {
      query[key] = value;
    }

    const result = {
      parts,
      query,
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result, null, 2));
  });
}

module.exports = {
  createServer,
};
