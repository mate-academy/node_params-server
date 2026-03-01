/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    const requestUrl = new URL(req.url, 'http://localhost');
    const query = Object.fromEntries(requestUrl.searchParams.entries());

    const parts = requestUrl.pathname.split('/').filter(Boolean);

    res
      .writeHead(200, {
        'content-type': 'application/json',
      })
      .end(
        JSON.stringify({
          parts,
          query,
        }),
      );
  });
}

module.exports = {
  createServer,
};
