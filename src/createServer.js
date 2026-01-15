/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    const normalizedUrl = new URL(req.url, 'http://localhost');
    const reqPhrase = normalizedUrl.pathname.split('/').filter(Boolean);
    const paramsObj = Object.fromEntries(normalizedUrl.searchParams.entries());

    const resp = {
      parts: reqPhrase,
      query: paramsObj,
    };

    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.statusMessage = 'OK';
    res.end(JSON.stringify(resp));
  });
}

module.exports = {
  createServer,
};
