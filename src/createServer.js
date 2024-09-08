/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  /* Write your code here */
  // Return instance of http.Server class
  const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const parts = url.pathname.split('/').filter((part) => part !== '');
    const query = {};

    url.searchParams.forEach((value, key) => {
      query[key] = value || '';
    });

    const result = {
      parts,
      query,
    };

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result));
  });

  return server;
}

module.exports = {
  createServer,
};
