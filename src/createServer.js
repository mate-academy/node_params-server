/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    const {
      pathname,
      searchParams,
    } = new URL(req.url, `http://${req.headers.host}`);

    if (pathname === '/favicon.ico') {
      res.writeHead(204, { 'Content-Type': 'image/x-icon' });
      res.end();

      return;
    }

    const parts = pathname.slice(1).split('/');

    const query = Object.fromEntries(searchParams.entries());

    res.end(JSON.stringify({
      parts,
      query,
    }));
  });

  return server;
}

module.exports = {
  createServer,
};
