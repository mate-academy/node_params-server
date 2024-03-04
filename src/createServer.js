/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    res.setHeader('Content-type', 'application/json');

    const [path, search] = req.url.split('?');

    const isQuery = new URLSearchParams(search);
    const result = {};

    result.parts = path.split('/').filter(Boolean);
    result.query = Object.fromEntries(isQuery);

    res.end(JSON.stringify(result));
  });

  return server;
}

module.exports = {
  createServer,
};
