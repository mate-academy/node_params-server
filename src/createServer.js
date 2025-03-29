/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;

    res.on('error', (error) => {
      console.error(error);
      res.statusCode = 400;
      res.end();
    });

    const url = new URL(req.url.slice(1), `http://${req.headers.host}`);

    const urlParts = url.pathname.startsWith('/')
      ? url.pathname.slice(1)
      : url.pathname;
    const parts = urlParts.split('/');
    const query = {};

    url.searchParams.forEach((value, key) => {
      query[key] = value || '';
    });

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
