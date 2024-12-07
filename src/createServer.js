/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
    const parts = parsedUrl.pathname.split('/').filter(Boolean);

    const query = Object.fromEntries(parsedUrl.searchParams.entries());
    const response = { parts, query };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response));
  });

  return server;

  /* Write your code here */
  // Return instance of http.Server class
}

module.exports = {
  createServer,
};
