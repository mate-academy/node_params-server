/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    res.setHeader('content-type', 'application/json');

    const url = new URL(req.url, `http://${req.headers.host}`);

    const parts = url.pathname.split('/').slice(1);

    if (url.hostname !== 'localhost') {
      parts.splice(0, 0, url.hostname);
    }

    const query = Object.fromEntries(url.searchParams.entries());

    res.statusCode = 200;
    res.end(JSON.stringify({ parts, query }));
  });
}

module.exports = {
  createServer,
};
