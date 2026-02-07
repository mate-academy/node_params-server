/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    const normalizedUrl = new URL(req.url, `http://${req.headers.host}`);
    const parts = normalizedUrl.pathname
      .slice(1)
      .split('/')
      .filter((part) => part.length > 0);
    const query = Object.fromEntries(normalizedUrl.searchParams.entries());

    console.log('Received request:', { parts, query });

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ parts, query }));
  });
}

module.exports = {
  createServer,
};
