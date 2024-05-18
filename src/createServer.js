/* eslint-disable no-console */
'use strict';

const http = require('http');
const url = require('url');

function createServer() {
  const server = new http.Server();

  server.on('request', (req, res) => {
    const nomalizedUrl = new url.URL(
      req.url.replace(/\/+/g, '/'),
      `http://${req.headers.host}`,
    );

    const parts = nomalizedUrl.pathname
      .split('/')
      .filter((item) => item !== '');

    const query = Object.fromEntries(nomalizedUrl.searchParams.entries());

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ parts, query }));
  });

  return server;
}

module.exports = {
  createServer,
};
