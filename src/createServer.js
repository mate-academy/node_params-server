/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    const [pathname, query] = req.url.split('?');
    const params = new URLSearchParams(query);

    res.setHeader('Content-Type', 'application/json');

    const result = {
      'parts': [],
      'query': {},
    };

    result.parts = pathname
      .slice(1)
      .split('/')
      .filter(part => !!part);

    result.query = Object.fromEntries(
      params.entries()
    );

    res.end(JSON.stringify(result));
  });

  return server;
}

module.exports = {
  createServer,
};
