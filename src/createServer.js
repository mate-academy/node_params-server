/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    const url = new URL(`http://${req.headers.host}${req.url}`);
    const { pathname, searchParams } = url;
    const normalizedPath = pathname.split('/').filter((item) => item !== '');

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    res.end(
      JSON.stringify({
        parts: normalizedPath,
        query: Object.fromEntries(searchParams.entries()),
      }),
    );
  });
}

module.exports = {
  createServer,
};
