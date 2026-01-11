/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const queryParams = Object.fromEntries(url.searchParams);

    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;

    res.end(
      JSON.stringify({
        parts: url.pathname.split('/').filter(Boolean),
        query: queryParams,
      }),
    );
  });
}

module.exports = {
  createServer,
};
