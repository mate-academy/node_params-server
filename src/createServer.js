/* eslint-disable no-console */
'use strict';

const http = require('http');

const ORIGIN = 'http://localhost:5701';

function createServer() {
  return http.createServer((req, res) => {
    const url = new URL(ORIGIN + req.url);

    res.setHeader('Content-Type', 'application/json');

    res.end(
      JSON.stringify({
        parts: url.pathname.slice(1).split('/'),
        query: Object.fromEntries(url.searchParams),
      }),
    );
  });
}

module.exports = {
  createServer,
};
