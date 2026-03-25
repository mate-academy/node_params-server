/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    const requestURL = new URL(req.url, `http://${req.headers.host}`);
    const parts = requestURL.pathname.split('/').slice(1);
    const query = Object.fromEntries(requestURL.searchParams.entries());

    res.end(JSON.stringify({ parts, query }));
  });
}

module.exports = {
  createServer,
};
