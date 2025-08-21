/* eslint-disable no-console */
'use strict';

const http = require('node:http');

function createServer() {
  return http.createServer((req, res) => {
    res.setHeader('Content-type', 'application/json');

    const normalizedURL = req.url.split('?');
    const parts = normalizedURL[0].split('/').filter(Boolean);
    const params = new URLSearchParams(normalizedURL[1]);

    const query = {};

    for (const [key, value] of params.entries()) {
      query[key] = value;
    }

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
