/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  /* Write your code here */
  // Return instance of http.Server class
  return http.createServer((req, res) => {
    const url = new URL(req.url, 'http://localhost');

    const parts = url.pathname.split('/').filter(Boolean);

    const query = Object.fromEntries(url.searchParams);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    res.end(JSON.stringify({ parts, query }));
  });
}

module.exports = {
  createServer,
};
