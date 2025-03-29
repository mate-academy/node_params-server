/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    const parsedUrl = new URL(`http://${req.headers.host}${req.url}`);
    const pathname = parsedUrl.pathname
      .replace(/\/{2,}/g, '/')
      .split('/')
      .filter(Boolean);
    const queryParams = parsedUrl.searchParams;

    if (req.url === '/') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ parts: [], query: {} }));

      return;
    }

    const responseData = {
      parts: pathname,
      query: Object.fromEntries(queryParams),
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(responseData));
  });

  return server;
}

module.exports = {
  createServer,
};
