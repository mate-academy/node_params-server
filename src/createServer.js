/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  /* Write your code here */
  // Return instance of http.Server class
  return http.createServer((req, res) => {
    const normalizedUrl = new URL(req.url, 'http://localhost:5700');

    const partsArr = normalizedUrl.pathname.split('/');
    const queryObj = Object.fromEntries(normalizedUrl.searchParams.entries());

    const resultObj = {
      parts: partsArr.slice(1),
      query: queryObj,
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(resultObj));
  });
}

module.exports = {
  createServer,
};
