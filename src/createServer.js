/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  /* Write your code here */
  // Return instance of http.Server class
  return http.createServer((req, res) => {
    const normalizedUrl = new URL(req.url, `http://${req.headers.host}`);
    const parts = normalizedUrl.pathname.split(/\/+/).filter(Boolean);
    const query = Object.fromEntries(normalizedUrl.searchParams.entries());

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ parts, query }));
  });
}

module.exports = {
  createServer,
};
