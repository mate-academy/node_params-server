/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    const url = new URL(req.url, 'http://localhost');

    const parts = url.pathname.split('/').filter(Boolean);

    const query = {};

    url.searchParams.forEach((value, key) => {
      query[key] = value;
    });

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
