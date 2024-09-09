/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    const url = new URL(req.url.slice(1), `http://${req.headers.host}`);
    const normalizedPath = url.pathname.startsWith('/')
      ? url.pathname.slice(1)
      : url.pathname;

    const parts = normalizedPath.split('/');
    const query = {};

    url.searchParams.forEach((value, key) => {
      query[key] = value || '';
    });

    res.setHeader('content-type', 'application/json');
    res.statusCode = 200;
    res.statusMessage = 'OK';
    res.end(JSON.stringify({ parts, query }));
  });

  return server;
}

module.exports = {
  createServer,
};
