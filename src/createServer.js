'use strict';

const http = require('http');
const url = require('url');

function createServer() {
  return http.createServer((req, res) => {
    const parsedUrl = new url.URL(req.url, `http://${req.headers.host}`);
    const parts = parsedUrl.pathname
      .split('/')
      .filter((part) => part.length > 0 && part !== '/');
    const query = {};

    if (!parts.length) {
      parts.push('test');
    }

    parsedUrl.searchParams.forEach((value, key) => {
      query[key] = value;
    });

    const response = {
      parts,
      query,
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response));
  });
}

module.exports = {
  createServer,
};
