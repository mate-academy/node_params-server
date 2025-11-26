/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    const normalizedUrl = new URL(req.url, `http://${req.headers.host}`);

    console.log(normalizedUrl);

    const parts = normalizedUrl.pathname.split('/').filter(Boolean);
    const query = Object.fromEntries(normalizedUrl.searchParams.entries());

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ parts, query }));
  });

  return server;
}

module.exports = {
  createServer,
};
