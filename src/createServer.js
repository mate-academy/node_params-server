/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  /* Write your code here */
  // Return instance of http.Server class
  const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;

    const url = req.url;
    const [path, params] = url.split('?');
    const parts = path.split('/').filter((part) => part !== '');

    const queryParams = new URLSearchParams(params);
    const query = {};

    for (const [key, value] of queryParams.entries()) {
      query[key] = value;
    }

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
