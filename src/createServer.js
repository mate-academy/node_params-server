/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    const normalizedURL = new URL(req.url.slice(1), 'http://localhost:5701');
    const response = {
      parts: normalizedURL.pathname.slice(1).split('/'),
      query: Object.fromEntries(normalizedURL.searchParams.entries()),
    };

    console.log(normalizedURL);
    console.log(req.url.slice(1), JSON.stringify(response));

    res.write(JSON.stringify(response));
    res.end();
  });

  return server;
}

module.exports = {
  createServer,
};
