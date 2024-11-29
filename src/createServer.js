/* eslint-disable no-console */
'use strict';

const http = require('http');

const PORT = process.env.PORT || 5701;
const baseUrl = `http://localhost:${PORT}`;

const createServer = () => {
  return http.createServer((req, res) => {
    const normalizedURL = new URL(req.url, baseUrl);
    const parts = normalizedURL.pathname.split('/').slice(1);
    const params = {};

    for (const [key, value] of normalizedURL.searchParams.entries()) {
      params[key] = value;
    }

    res.setHeader('Content-Type', 'application/json');

    res.end(
      JSON.stringify({
        parts: parts,
        query: params,
      }),
    );
  });
};

module.exports = {
  createServer,
};
