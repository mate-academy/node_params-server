/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    const params = new URL(`http://${req.headers.host}${req.url}`);
    const parts = params.pathname.split('/').filter((el) => el !== '');

    const queries = [];

    for (const qury of params.searchParams) {
      const nameQuery = qury[0];
      const targetCase = qury[1];

      queries.push([nameQuery, targetCase]);
    }

    const query = {};

    for (const qury of queries) {
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
