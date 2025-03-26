/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  /* Write your code here */
  // Return instance of http.Server class

  const server = http.createServer((req, res) => {
    const requestURL = new URL(req.url, `http:${req.headers.host}`);
    const pathName = requestURL.pathname.split('/').filter((p) => p !== '');
    const params = Object.fromEntries(requestURL.searchParams.entries());

    const result = {
      parts: pathName,
      query: params,
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  });

  return server;
}

module.exports = {
  createServer,
};
