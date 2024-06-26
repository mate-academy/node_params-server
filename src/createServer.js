/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    const parsedUrl = new URL(`http://${req.headers.host}${req.url}`);

    const pathnameParts = parsedUrl.pathname
      .split('/')
      .filter((part) => part !== '');

    const query = {};

    parsedUrl.searchParams.forEach((value, key) => {
      query[key] = value;
    });

    res.setHeader('Content-Type', 'application/json');

    res.end(
      JSON.stringify({
        parts: pathnameParts,
        query,
      }),
    );
  });
}

module.exports = {
  createServer,
};
