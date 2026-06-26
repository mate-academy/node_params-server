/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    const normalizedUrl = new URL(req.url, 'http://localhost:5701');

    const fullPathname = normalizedUrl.pathname.slice(1);
    const fullPSearch = normalizedUrl.searchParams;

    const wordOfPathname = fullPathname.split('/').filter(Boolean);
    const paramsObj = Object.fromEntries(fullPSearch);

    const response = {
      parts: wordOfPathname,
      query: paramsObj,
    };

    res.writeHead(200, 'OK', { 'Content-Type': 'application/json' });

    res.end(JSON.stringify(response));
  });

  return server;
}

module.exports = {
  createServer,
};
