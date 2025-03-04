/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    const [textWithSlashes, queryParams] = req.url.split('?');
    const parts = textWithSlashes.split('/').filter(el => el);
    const query = Object.fromEntries(new URLSearchParams(queryParams)
      .entries());

    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;

    res.end(JSON.stringify({
      parts, query,
    }));
  });
}

module.exports = {
  createServer,
};
