/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    res.setHeader('Content-type', 'application/json');

    const formattedUrl = req.url.replace(/\/+/g, '/');
    const normalizedUrl = new URL(formattedUrl, `http://${req.headers.host}`);

    const parts = normalizedUrl.pathname.slice(1).split('/');
    const query = Object.fromEntries(normalizedUrl.searchParams);

    const data = {
      parts,
      query,
    };

    res.end(JSON.stringify(data));
  });

  return server;
}

module.exports = {
  createServer,
};
