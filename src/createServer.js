/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    const rawUrl = (req.url || '/').replace(/^\/+/, '/');
    const url = new URL(rawUrl, 'http://localhost');

    const parts = url.pathname.split('/').filter(Boolean);

    const query = {};

    for (const [key, value] of url.searchParams.entries()) {
      query[key] = value;
    }

    const response = {
      parts,
      query,
    };

    res.writeHead(200, {
      'Content-Type': 'application/json',
    });

    res.end(JSON.stringify(response));
  });
}

module.exports = {
  createServer,
};
