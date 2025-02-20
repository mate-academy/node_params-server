/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    const [pathname, params] = req.url.split('?');

    res.writeHead(200, {
      'Content-Type': 'application/json',
    });

    const parts = pathname.split('/').filter(Boolean);
    const query = Object.fromEntries(new URLSearchParams(params));

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
