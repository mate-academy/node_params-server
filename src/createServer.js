/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);

    const query = {};
    parsedUrl.searchParams.forEach((value, key) => {
      query[key] = value;
    });

    const splitUrl = req.url.split('?');

    const parts = splitUrl[0]
      .split('/')
      .filter((part) => part !== '');

    const result = {
      parts: parts,
      query: query,
    };

    res.statusCode = 200;
    res.statusMessage = 'OK';
    res.end(JSON.stringify(result));
  });

  return server;
}

module.exports = {
  createServer,
};
