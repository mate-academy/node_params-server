/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    try {
      const url = new URL(req.url, `http://${req.headers.host}`);

      const pathname = url.pathname || '';
      const parts = pathname.split('/').filter((part) => part.length > 0);

      const query = Object.fromEntries(url.searchParams.entries());

      const responseObject = {
        parts: parts,
        query: query,
      };

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(responseObject));
    } catch (error) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Invalid URL' }));
    }
  });
}

module.exports = {
  createServer,
};
