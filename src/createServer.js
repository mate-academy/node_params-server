/* eslint-disable no-console */
'use strict';
const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    const { pathname, searchParams } = new URL(
      `http://${req.headers.host}${req.url}`,
    );
    const parts = pathname.split('/').filter((part) => part);
    const query = Object.fromEntries(searchParams.entries());

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
