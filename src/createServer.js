/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    const [path, queryString = ''] = req.url.split('?');
    const parts = decodeURIComponent((path || '/').slice(1))
      .split('/')
      .filter(Boolean);

    const query = {};
    const params = new URLSearchParams(queryString);

    for (const [key, value] of params) {
      query[key] = value;
    }

    res.writeHead(200, 'OK', { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ parts, query }));
  });

  return server;
}

module.exports = {
  createServer,
};
