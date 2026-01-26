/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    const url = new URL(req.url, 'http://localhost');

    const parts = url.pathname.split('/').filter(Boolean);

    const query = {};

    url.searchParams.forEach((value, key) => {
      query[key] = value;
    });

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ parts, query }));
  });
}

module.exports = {
  createServer,
};
