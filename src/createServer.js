/* eslint-disable no-console */
'use strict';

const http = require('node:http');

function createServer() {
  const server = http.createServer((req, res) => {
    const rawUrl = req.url.replace(/^\/+/, '/');
    const url = new URL(rawUrl, `http://${req.headers.host}`);

    if (url.pathname === '/favicon.ico') {
      res.writeHead(204);

      return res.end();
    }

    const result = {
      parts: [],
      query: {},
    };

    result.query = Object.fromEntries(url.searchParams.entries());

    const pathNames = url.pathname.split('/').filter((item) => item !== '');

    pathNames.forEach((i) => result.parts.push(i));

    console.log(url);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result));
  });

  return server;
}

module.exports = {
  createServer,
};
