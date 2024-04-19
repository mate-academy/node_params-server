/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    const [pathName, query] = req.url.split('?');

    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;

    res.end(
      JSON.stringify({
        parts: pathName.split('/').filter(Boolean),
        query: Object.fromEntries(new URLSearchParams(query).entries()),
      }),
    );
  });

  return server;
}

module.exports = {
  createServer,
};
