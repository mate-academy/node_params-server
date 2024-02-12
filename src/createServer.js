/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    const {
      pathname,
      searchParams,
    } = new URL(req.url.slice(1), `http://${req.headers.host}`);

    const parts = pathname.split('/').filter(part => !!part);

    const query = {};

    searchParams.forEach((value, key) => {
      const values = searchParams.getAll(key);

      query[key] = values.length > 1 ? values : value;
    });

    const response = {
      parts,
      query,
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });

    res.end(JSON.stringify(response));
  });
}

module.exports = {
  createServer,
};
