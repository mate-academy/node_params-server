/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);

    const urlParams = {
      parts: url.pathname
        ? url.pathname.split('/').filter((pathname) => pathname !== '')
        : [],
      query: url.searchParams
        ? Object.fromEntries(url.searchParams.entries())
        : {},
    };

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(urlParams));
  });
}

module.exports = {
  createServer,
};
