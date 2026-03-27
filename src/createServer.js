/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    if (!req.url) {
      res.end();

      return;
    }

    const [pathname, queryString] = req.url.split('?');

    const parts = pathname.split('/').filter((part) => part !== '');

    const query = Object.fromEntries(new URLSearchParams(queryString));

    const result = { parts: parts, query: query };

    console.log(parts, query);

    res.end(JSON.stringify(result));
  });

  return server;
}

module.exports = {
  createServer,
};
