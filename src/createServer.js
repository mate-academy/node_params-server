/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  /* Write your code here */
  // Return instance of http.Server class
  return http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);

    const parts = url.pathname.slice(1).split('/').filter(Boolean);
    const query = Object.fromEntries(url.searchParams);
    const result = {
      parts,
      query,
    };

    res.statusCode = 200;
    res.statusMessage = 'OK';
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result));
  });
}

module.exports = {
  createServer,
};
