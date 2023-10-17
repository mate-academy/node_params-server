/* eslint-disable no-console */
'use strict';

const http = require('http');

const server = http.createServer((req, res) => {
  const normalizedUrl = new URL(req.url, `http://${req.headers.host}`);

  const parts = normalizedUrl.pathname.slice(1).split('/');

  const query = {};

  Array.from(normalizedUrl.searchParams.entries())
    .forEach(q => {
      query[q[0]] = q[1];
    });
  console.log(query);

  const response = {
    parts,
    query,
  };

  res.setHeader('Content-type', 'application/json');
  res.statusCode = 200;

  res.end(
    JSON.stringify(response)
  );
});

module.exports = {
  server,
};
