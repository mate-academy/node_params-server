/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    const url = new URL(req.url.slice(1), `http://${req.headers.host}`);
    const normalizedPath = url.pathname.startsWith('/')
      ? url.pathname.slice(1)
      : url.pathname;
    const parts = normalizedPath.split('/');

    const query = {};

    [...url.searchParams.entries()].forEach(([key, value]) => {
      query[key] = value;
    });

    res.setHeader('content-type', 'application/json');

    res.on('error', (e) => {
      res.statusCode = 400;
      res.statusMessage = 'Something went wrong';
      res.end();
    });

    res.statusCode = 200;
    res.statusMessage = 'OK';
    res.write(JSON.stringify({ parts, query }));
    res.end();
  });
}

module.exports = {
  createServer,
};
