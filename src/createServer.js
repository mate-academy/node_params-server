/* eslint-disable no-console */
'use strict';

const http = require('node:http');

function createServer() {
  const server = http.createServer((req, res) => {
    const normalizedURL = new URL(req.url, `http://${req.headers.host}`);

    const normalizedPathname = normalizedURL.pathname
      .slice(1)
      .replace(/\/{2,}/g, '/');

    const data = {
      parts: normalizedPathname ? normalizedPathname.split('/') : [],
      query: Object.fromEntries(normalizedURL.searchParams.entries()),
    };

    res.statusCode = 200;
    res.statusMessage = 'OK';
    res.setHeader('Content-type', 'application/json');

    res.end(JSON.stringify(data));
  });

  return server;
}

module.exports = {
  createServer,
};
