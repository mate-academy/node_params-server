/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);

    const pathname = url.pathname.slice(1);
    const parts = pathname.split('/');

    const query = Object.fromEntries(Array.from(url.searchParams));

    const errors = [];

    if (!pathname) {
      errors.push({
        message: 'Missing path segment in URL',
      });
    }

    if (Object.keys(query).length === 0) {
      errors.push({
        message: 'Missing required query parameters',
      });
    }

    if (errors.length > 0) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.statusMessage = 'bad request';

      res.end(
        JSON.stringify({
          errors,
        }),
      );
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.statusMessage = 'OK';

    res.end(
      JSON.stringify({
        parts,
        query,
      }),
    );
  });

  return server;
}

module.exports = {
  createServer,
};
