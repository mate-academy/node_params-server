/* eslint-disable no-console */
'use strict';

const http = require('http');
const PORT = 5701;
const HOSTNAME = 'http://localhost';
const BASE = `${HOSTNAME}:${PORT}`;

function createServer() {
  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    const reqURL = new URL(req.url, BASE);
    const parts = reqURL.pathname.split('/').filter((path) => path.length >= 1);
    const query = Object.fromEntries(reqURL.searchParams.entries());

    const response = { parts: parts, query: query };

    res.end(JSON.stringify(response));
  });

  return server;
}

module.exports = {
  createServer,
  BASE,
};
