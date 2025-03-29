/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    const params = new URL(`http://${req.headers.host}${req.url}`);
    const parts = params.pathname.split('/').filter((el) => el !== '');

    const query = {};

    for (const qury of params.searchParams) {
      query[qury[0]] = qury[1];
    }

    const result = {
      parts,
      query,
    };

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result));
  });

  return server;
}

module.exports = {
  createServer,
};
