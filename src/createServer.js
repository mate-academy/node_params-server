/* eslint-disable no-console */
'use strict';

const http = require('http');
const path = require('path');

function createServer() {
  return http.createServer((req, res) => {
    const url = new URL(path.normalize(req.url), `http://${req.headers.host}`);
    const parts = url.pathname.slice(1).split('/');

    const query = {};

    for (const entry of url.searchParams.entries()) {
      const [key, value] = entry;

      query[key] = value;
    }

    res.setHeader('content-type', 'application/json');

    res.end(JSON.stringify({ parts, query }));
  });
}

module.exports = {
  createServer,
};
