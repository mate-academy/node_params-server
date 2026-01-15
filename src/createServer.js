/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    const normalizedUrl = new URL(req.url, 'http://localhost');

    const resp = {
      parts: normalizedUrl.pathname.split('/').filter(Boolean),
      query: Object.fromEntries(normalizedUrl.searchParams.entries()),
    };

    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.statusMessage = 'OK';
    res.end(JSON.stringify(resp));
  });
}

module.exports = {
  createServer,
};
