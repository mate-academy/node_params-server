/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') {
      res.statusCode = 204;
      res.end();

      return;
    }

    const [path, queryString] = (req.url || '').split('?');
    const words = path && path.startsWith('/') ? path.slice(1) : '';
    const params = new URLSearchParams(queryString || '');

    const result = {
      parts: words.split('/').filter((word) => word !== ''),
      query: Object.fromEntries(params),
    };

    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify(result));
  });

  return server;
}

module.exports = {
  createServer,
};
