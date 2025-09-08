/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  /* Write your code here */
  // Return instance of http.Server class
  const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);

    const query = {};
    const pathSplited = url.pathname.split('/').filter(Boolean);

    url.searchParams.forEach((value, key) => {
      query[key] = value;
    });

    res.setHeader('Content-Type', 'application/json');
    res.statusMessage = 'OK';
    res.statusCode = 200;

    res.end(
      JSON.stringify({
        parts: pathSplited,
        query,
      }),
    );
  });

  return server;
}

module.exports = {
  createServer,
};
