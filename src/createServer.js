/* eslint-disable prettier/prettier */
/* eslint-disable indent */
/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  /* Write your code here */
  // Return instance of http.Server class
  const server = http.createServer((req, res) => {
    const normalizedURL = new URL(req.url, 'http://localhost:5700');
    const parts = normalizedURL.pathname
      .split('/')
      .slice(1)
      .filter((part) => part !== '');
    const query = Object.fromEntries(normalizedURL.searchParams.entries());

    console.log(parts);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    res.end(
      JSON.stringify({
        parts: parts,
        query: query,
      }),
    );
  });

  return server;
}

module.exports = {
  createServer,
};
