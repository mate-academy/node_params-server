/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const { pathname, searchParams } = url;
    const parts = [...pathname.split('/').filter(Boolean)];
    const query = Object.fromEntries(searchParams.entries());

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ parts, query }));
  });
}

module.exports = { createServer };
