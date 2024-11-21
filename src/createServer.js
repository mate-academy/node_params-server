'use strict';
/* eslint-disable no-console */

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    res.setHeader('Content-type', 'application/json');

    const normalizedURL = new URL(`http://${req.headers.host}${req.url}`);
    const json = {};

    json.parts = normalizedURL.pathname
      .replace(/\/+/g, ',')
      .slice(1)
      .split(',');

    json.query = Object.fromEntries(normalizedURL.searchParams.entries());

    res.end(JSON.stringify(json));
  });
}

module.exports = {
  createServer,
};
