/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    const [pathname, queryString] = req.url.split('?');
    const parts = pathname.split('/').filter((part) => part.length);
    const params = new URLSearchParams(queryString);
    const query = Object.fromEntries(params);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ parts, query }));
  });

  return server;
}

module.exports = {
  createServer,
};
