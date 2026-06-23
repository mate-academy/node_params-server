/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    const url = new URL(req.url || '/', `http://${req.headers.host}`);

    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;

    const parts = url.pathname.split('/').filter((part) => part.length !== 0);
    const query = Object.fromEntries(url.searchParams.entries());

    const result = { parts, query };

    res.end(JSON.stringify(result));
  });
}

module.exports = {
  createServer,
};
