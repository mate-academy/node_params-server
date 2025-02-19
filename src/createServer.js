/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);

    const arrUrl = url.pathname.split('/').filter(Boolean);
    const query = Object.fromEntries(url.searchParams.entries());

    const result = { arrUrl, query };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  });
}

module.exports = {
  createServer,
};
