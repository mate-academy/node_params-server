/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  /* Write your code here */
  // Return instance of http.Server class
  return http.createServer((req, res) => {
    const urla = new URL(req.url, `http://${req.headers.host}`);

    const result = urla.pathname.split('/').filter(Boolean);

    const obj = Object.fromEntries(urla.searchParams.entries());
    const objectToReturn = { parts: result, query: obj };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(objectToReturn));
  });
}

module.exports = {
  createServer,
};
