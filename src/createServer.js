/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    const requestURL = new URL(
      req.url.replaceAll('//', '/'),
      `http://${req.headers.host}`,
    );
    const parts = requestURL.pathname.split('/').filter((part) => part !== '');

    const query = Object.fromEntries(requestURL.searchParams.entries());

    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.statusMessage = 'OK';

    res.end(
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
