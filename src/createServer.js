/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const parts = url.pathname.split('/').filter(Boolean);
    const query = Object.fromEntries(url.searchParams.entries());

    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;

    res.end(JSON.stringify({ parts, query }));
  });
}

module.exports = {
  createServer,
};
