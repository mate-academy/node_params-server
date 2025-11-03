/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    const deletedDoubleSlash = req.url.replace(/\/{2,}/g, '/');
    const url = new URL(deletedDoubleSlash, `http://${req.headers.host}`);
    const parts = url.pathname.split('/').filter((part) => part);
    const query = Object.fromEntries(url.searchParams.entries());
    const result = JSON.stringify({ parts, query });

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(result);
  });
}

module.exports = {
  createServer,
};
