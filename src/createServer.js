/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    const normalizedURL = new URL(req.url, `http://${req.headers.host}`);
    const pathname = normalizedURL.pathname
      .split('/')
      .filter((part) => part !== '');
    const query = {};

    for (const [key, value] of normalizedURL.searchParams.entries()) {
      if (Object.hasOwn(query, key)) {
        if (Array.isArray(query[key])) {
          query[key].push(value);
        } else {
          const savedValue = query[key];

          query[key] = [savedValue, value];
        }
      } else {
        query[key] = value;
      }
    }

    res.setHeader('Content-Type', 'application/json');

    res.statusCode = 200;
    res.statusMessage = 'OK';

    res.end(
      JSON.stringify({
        parts: pathname,
        query: query,
      }),
    );
  });

  return server;
}

module.exports = {
  createServer,
};
