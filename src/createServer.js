/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    const parts = req.url
      .split('?')[0]
      .split('/')
      .filter((part) => part);

    const queryString = req.url.split('?')[1] || '';
    const query = Object.fromEntries(new URLSearchParams(queryString));

    res.setHeader('Content-Type', 'application/json');

    res.end(JSON.stringify({ parts: parts, query: query }));
  });
}

module.exports = {
  createServer,
};
