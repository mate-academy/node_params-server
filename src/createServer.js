/* eslint-disable no-console */
'use strict';

const http = require('node:http');

function createServer() {
  const server = http.createServer((req, res) => {
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);

    const params = parsedUrl.pathname.slice(1).split('/').filter(Boolean);
    const searchParams = Object.fromEntries(parsedUrl.searchParams.entries());

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    res.end(JSON.stringify({ parts: params, query: searchParams }));
  });

  return server;
}

module.exports = {
  createServer,
};
