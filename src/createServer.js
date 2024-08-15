/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    const normalizedUrl = new URL(req.url, `http://${req.headers.host}`);
    const parts = normalizedUrl.pathname.slice(1).split('/').join(', ');
    const searchParams = normalizedUrl.searchParams.entries();
    const query = {};

    for (const [key, value] of searchParams) {
      if (!query[key]) {
        query[key] = [];
      }

      query[key].push(value);
    }

    for (const key in query) {
      query[key] = query[key].join(', ');
    }

    console.log({
      parts,
      query,
    });

    res.writeHead(200, { 'Content-Type': 'application/json' });

    res.end(
      JSON.stringify({
        parts,
        query,
      }),
    );
  });
}

module.exports = {
  createServer,
};
