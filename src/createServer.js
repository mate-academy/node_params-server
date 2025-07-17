/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    const [rawPath, queryString] = req.url.split('?');
    const rawPaths = rawPath.split('/');
    const parts = rawPaths.filter(Boolean);
    const params = new URLSearchParams(queryString || '');
    const query = {};

    params.forEach((value, key) => (query[key] = value));

    const response = {
      parts,
      query,
    };

    res.end(JSON.stringify(response));
  });
  /* Write your code here */
  // Return instance of http.Server class
}

module.exports = {
  createServer,
};
