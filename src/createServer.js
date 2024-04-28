/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    const { pathname, searchParams } = new URL(
      req.url.slice(1),
      `http://${req.headers.host}`,
    );
    const parts = pathname.slice(1).split('/');
    const query = Object.fromEntries(searchParams.entries());

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ parts, query }));
  });
}

module.exports = {
  createServer,
};
