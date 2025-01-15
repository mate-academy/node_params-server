/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    const baseUrl = new URL(req.url, `http://${req.headers.host}`);
    const parts = baseUrl.pathname.split('/').filter((u) => u);
    const query = Object.fromEntries(baseUrl.searchParams.entries());

    const result = {
      parts,
      query,
    };

    console.log(result);
    res.setHeader('content-type', 'application/json');
    res.end(JSON.stringify(result));
  });

  return server;
}

module.exports = {
  createServer,
};
