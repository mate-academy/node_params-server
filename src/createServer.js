/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    const path = req.url.slice(0, 2) === '//'
      ? req.url.slice(1)
      : req.url;

    const url = new URL(path, `http://${req.headers.host}`);

    const parts = url.pathname
      .replace(/\/*/, '')
      .trim()
      .split('/');
    const query = {};

    for (const param of url.searchParams.keys()) {
      query[param] = url.searchParams.get(param) || '';
    }

    const result = { query };

    if (parts.length) {
      result.parts = parts;
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  });

  return server;
}

module.exports = {
  createServer,
};
