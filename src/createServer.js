'use strict';

const http = require('node:http');
const url = require('node:url');

const { deleteStartDoubleSlash } = require('./helpers/deleteStartDoubleSlash');

function createServer() {
  const server = http.createServer((req, res) => {
    res.setHeader('content-type', 'application/json');

    const normalizedUrl = new url.URL(
      deleteStartDoubleSlash(req.url),
      `http://${req.headers.host}`,
    );
    const parts = normalizedUrl.pathname.slice(1).split('/');
    const query = Object.fromEntries(normalizedUrl.searchParams.entries());

    res.end(
      JSON.stringify({
        parts,
        query,
      }),
    );
  });

  return server;
}

module.exports = {
  createServer,
};
