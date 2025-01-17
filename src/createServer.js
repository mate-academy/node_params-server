/* eslint-disable no-console */
'use strict';

const http = require('node:http');

function createServer() {
  return http.createServer((req, res) => {
    const url = req.url.replace('//', '/');

    const normalizedURL = new URL(url, 'http://localhost:5700/');
    const searchParams = normalizedURL.searchParams;
    const parts = normalizedURL.pathname.split('/').slice(1);
    const params = {};

    for (const [key, value] of searchParams) {
      params[key] = value;
    }

    console.log(parts);
    console.log(params);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ parts: parts, query: params }));
  });
}

module.exports = {
  createServer,
};
