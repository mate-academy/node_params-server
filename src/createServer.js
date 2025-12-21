/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);

    const response = {
      parts: url.pathname.split('/').filter(Boolean),
      query: Object.fromEntries(url.searchParams),
    };

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
  });
}

module.exports = {
  createServer,
};
