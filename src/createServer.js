/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  /* Write your code here */
  // Return instance of http.Server class
  return http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const pathname = url.pathname
      .slice(1)
      .split('/')
      .filter((item) => item.length > 0);

    const searchParams = url.searchParams;

    res.writeHead(200, { 'Content-Type': 'application/json' });

    res.end(
      JSON.stringify({
        parts: pathname,
        query: Object.fromEntries(searchParams),
      }),
    );
  });
}

module.exports = {
  createServer,
};
