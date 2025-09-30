/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  /* Write your code here */
  // Return instance of http.Server class
  return http.createServer((req, res) => {
    const [pathPart, queryString] = req.url.split('?');
    const params = new URLSearchParams(queryString || '');

    const parts = pathPart.split('/').filter(Boolean);

    const query = {};

    for (const [key, value] of params.entries()) {
      query[key] = value;
    }

    const output = { parts, query };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(output));
  });
}

module.exports = {
  createServer,
};
