/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    const [path, queryString] = req.url.split('?');

    res.setHeader('Content-Type', 'application/json');

    const queryParams = new URLSearchParams(queryString);

    const result = JSON.stringify({
      parts: path
        .replaceAll('/', ' ')
        .split(' ')
        .map((i) => i.trim())
        .filter((i) => !!i),
      query: Object.fromEntries(queryParams.entries()),
    });

    res.end(result);
  });

  return server;
}

module.exports = {
  createServer,
};
