/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  /* Write your code here */

  const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const params = new URLSearchParams(url.search);

    const text = url.pathname.slice(1);
    const query = Object.fromEntries(params.entries());

    res.writeHead(200, { 'Content-Type': 'application/json' });

    const objToReturn = {
      query: query,
      parts: text.split('/'),
    };

    res.end(JSON.stringify(objToReturn));
  });

  return server;
}

module.exports = {
  createServer,
};
