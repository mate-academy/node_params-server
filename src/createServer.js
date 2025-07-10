/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    const fullUrl = new URL(req.url, `http://${req.headers.host}`);
    const params = fullUrl.searchParams;
    const result = {
      parts: fullUrl.pathname.slice(1).split('/'),
      query: {},
    };

    for (const [key, value] of params.entries()) {
      result.query[key] = value;
    }

    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(JSON.stringify(result));
  });

  return server;
}

module.exports = {
  createServer,
};
