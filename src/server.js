'use strict';

const http = require('http');

const server = http.createServer((req, res) => {
  const normalizedURL = new URL(req.url, `http://${req.headers.host}`);
  const parts = normalizedURL.pathname.slice(1).split('/');
  const query = {};

  for (const [key, value] of normalizedURL.searchParams.entries()) {
    query[key] = value;
  }

  if (!parts.length && !query.length) {
    res.writeHead(400, 'Bad request');

    res.end('No pathname and no searchParams!');
  }

  res.setHeader('Content-Type', 'application/json');

  res.end(
    JSON.stringify(
      {
        parts,
        query,
      },
      null,
      '  ',
    ),
  );
});

module.exports = { server };
