/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    const parseUrl = new URL(req.url, `http://${req.headers.host}`);

    const parts = parseUrl.pathname.split('/').filter((part) => part !== '');
    const query = {};

    parseUrl.searchParams.forEach((value, key) => {
      query[key] = value;
    });

    const response = {
      parts,
      query,
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response));
  });

  return server;
}

module.exports = {
  createServer,
};
