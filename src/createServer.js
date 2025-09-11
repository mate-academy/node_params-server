/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    const [path, params] = decodeURIComponent(req.url).split('?');
    const searchParams = new URLSearchParams(params);

    res.setHeader('Content-Type', 'application/json');

    res.statusCode = 200;

    res.end(
      JSON.stringify({
        parts: path.split('/').filter(Boolean),
        query: Object.fromEntries(searchParams.entries()),
      }),
    );
  });
}

module.exports = {
  createServer,
};
