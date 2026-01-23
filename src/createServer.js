/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    const url = new URL(req.url || '', `http://${req.headers.host}`);
    const pathParts = url.pathname.split('/').filter((part) => part !== '');
    const params = Object.fromEntries(url.searchParams.entries());

    res.setHeader('Content-type', 'application/json');

    res.end(
      JSON.stringify({
        parts: pathParts,
        query: params,
      }),
    );
  });
}

module.exports = {
  createServer,
};
