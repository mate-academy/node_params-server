/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    const params = new URL(req.url, 'http://localhost');
    const parts = params.pathname.split('/').filter(Boolean);
    const query = {};

    console.log(params.searchParams);

    for (const [key, value] of params.searchParams) {
      query[key] = String(value);
    }

    res.setHeader('Content-Type', 'application/json');

    res.write(
      JSON.stringify({
        parts,
        query,
      }),
    );
    res.end();
  });

  return server;
}

module.exports = {
  createServer,
};
