/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    const urlObj = new URL(req.url, `http://${req.headers.host}`);
    const query = Object.fromEntries(urlObj.searchParams);
    const pathname = urlObj.pathname.split('/').filter((path) => path !== '');

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ parts: pathname, query: query }));
  });
}

module.exports = {
  createServer,
};
