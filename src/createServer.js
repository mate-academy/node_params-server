/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    const normalizedUrl = new URL(
      req.url.replace(/\/+/g, '/'),
      `http://${req.headers.host}`,
    );

    const parts = normalizedUrl.pathname.split('/').slice(1);

    const query = Object.fromEntries(normalizedUrl.searchParams.entries());

    try {
      res.end(JSON.stringify({ parts, query }));
    } catch (err) {
      console.error(err);
    }
  });
}

module.exports = {
  createServer,
};
