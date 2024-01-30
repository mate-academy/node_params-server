/* eslint-disable no-console */
'use strict';

const http = require('http');
const path = require('path');

function createServer() {
  return http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;

    const url = new URL(path.normalize(req.url), `http://${req.headers.host}`);
    const parts = url.pathname.split('/').slice(1);
    const search = url.searchParams;
    const query = Object.fromEntries(search.entries());

    const result = {
      parts, query,
    };

    console.log(result);

    res.end(JSON.stringify(result));
  });
}

module.exports = {
  createServer,
};
