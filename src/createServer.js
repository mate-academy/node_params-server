/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    const parts = url.pathname.split('/').filter(Boolean);
    const query = Object.fromEntries(url.searchParams.entries());
    const responseData = { parts, query };

    res.end(JSON.stringify(responseData));

    console.log(url);
  });

  return server;
}

module.exports = {
  createServer,
};
