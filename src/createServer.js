/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    const [path, queryString = ''] = req.url.split('?');
    const parts = path.split('/').filter(Boolean);

    const params = new URLSearchParams(queryString);
    const query = Object.fromEntries(params.entries());

    res.statusCode = 200;

    return res.end(
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
