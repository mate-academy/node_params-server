/* eslint-disable no-console */
'use strict';

const http = require('http');
const url = require('url');

const getParts = (path) => path.split('/').filter((p) => p !== '/' && p !== '');
const getQuery = (searchParams) => Object.fromEntries(searchParams.entries());

function createServer() {
  return http.createServer((req, res) => {
    const normalizedUrl = new url.URL(req.url, 'http://localhost');

    res.setHeader('Content-Type', 'application/json');

    res.end(
      JSON.stringify({
        parts: getParts(normalizedUrl.pathname),
        query: getQuery(normalizedUrl.searchParams),
      }),
    );
  });
}

module.exports = {
  createServer,
};
