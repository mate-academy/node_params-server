/* eslint-disable node/no-deprecated-api */
'use strict';

const http = require('http');
const url = require('url');

function createServer() {
  const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;

    const parts = pathname.split('/').filter(Boolean);

    const response = {
      parts: parts,
      query: query,
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response));
  });

  return server;
}

module.exports = {
  createServer,
};
