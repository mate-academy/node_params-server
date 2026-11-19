/* eslint-disable no-console */
'use strict';

const http = require('http');
const url = require('url');

function createServer() {
  return http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname || '/';
    const parts = pathname.split('/').filter((part) => part !== '');
    const query = parsedUrl.query;

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ parts, query }));
  });
}

module.exports = {
  createServer,
};
