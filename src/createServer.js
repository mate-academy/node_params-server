'use strict';

const http = require('http');
const url = require('url');

function createServer() {
  const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    const normalizedUrl = new url.URL(
      req.url.replace(/\/\//g, '/'),
      `http://${req.headers.host}`,
    );

    const parts = normalizedUrl.pathname.slice(1).split('/');

    const query = Object.fromEntries(normalizedUrl.searchParams);

    const responseBody = {
      parts,
      query,
    };

    res.writeHead(200);
    res.end(JSON.stringify(responseBody));
  });

  return server;
}

module.exports = {
  createServer,
};
