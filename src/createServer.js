/* eslint-disable no-console */
'use strict';

const http = require('http');
const url = require('url');

function createServer() {
  return http.createServer((req, res) => {
    const normalizedUrl = new url.URL(req.url, `http://${req.headers.host}`);

    const pathnamePart = normalizedUrl.pathname.split('/').filter(Boolean);

    const pathnameQuery = normalizedUrl.searchParams;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    res.end(
      JSON.stringify({
        parts: pathnamePart,
        query: Object.fromEntries(pathnameQuery.entries()),
      }),
    );
  });
}

module.exports = {
  createServer,
};
