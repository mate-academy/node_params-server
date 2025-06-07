/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    const normalizedUrl = new URL(req.url, `http://${req.headers.host}`);
    const queries = normalizedUrl.searchParams.entries();
    const path = normalizedUrl.pathname.slice(1);

    const query = {};

    for (const [key, value] of queries) {
      query[key] = value;
    }

    const parts = path.split('/');

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ parts, query }));
  });

  return server;
}

module.exports = {
  createServer,
};
