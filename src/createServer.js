/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);

    const pathname = url.pathname.slice(1);
    const parts =
      pathname[0] === '/'
        ? pathname.slice(1).pathname.split('/')
        : pathname.split('/');

    const query = Object.fromEntries(Array.from(url.searchParams));

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
