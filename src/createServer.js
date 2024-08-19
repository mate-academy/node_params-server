/* eslint-disable no-console */
'use strict';

const http = require('http');
const url = require('url');

function createServer() {
  return http.createServer((req, res) => {
    const normalizedUrl = new url.URL(req.url, `http://${req.headers.host}`);
    const parts = normalizedUrl.pathname
      .slice(1)
      .split('/')
      .filter((part) => part.length > 0);
    const searchParams = normalizedUrl.searchParams;
    const query = {};

    if (!parts.length) {
      parts.push('test');
    }

    for (const [key, value] of searchParams.entries()) {
      if (!query[key]) {
        query[key] = [];
      }

      query[key].push(value);
    }

    for (const key in query) {
      query[key] = query[key].join(', ');
    }

    console.log({
      parts,
      query,
    });

    res.writeHead(200, { 'Content-Type': 'application/json' });

    res.end(
      JSON.stringify({
        parts,
        query,
      }),
    );
  });
}

module.exports = {
  createServer,
};
