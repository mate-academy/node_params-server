/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    const fullUrl = `http://${req.headers.host}${req.url}`;
    const parsedUrl = new URL(fullUrl);

    const pathname = parsedUrl.pathname;
    const parts = pathname.split('/').filter(Boolean);
    const query = Object.fromEntries(parsedUrl.searchParams.entries());

    const response = {
      parts,
      query,
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response, null, 2));
  });
}

module.exports = {
  createServer,
};
