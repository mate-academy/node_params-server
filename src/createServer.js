/* eslint-disable no-console */
'use strict';

const http = require('node:http');

function createServer() {
  return http.createServer((req, res) => {
    const normalaizedUrl = new URL(req.url, `http://${req.headers.host}`);
    const pathname = normalaizedUrl.pathname;
    const searchParams = normalaizedUrl.searchParams;

    const normalazedPath = pathname.split('/').filter((value) => value !== '');
    const narmalaizedSearch = {};

    for (const [key, value] of searchParams) {
      narmalaizedSearch[key] = value;
    }

    const response = {
      parts: normalazedPath,
      query: narmalaizedSearch,
    };

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.statusMessage = 'OK';
    res.end(JSON.stringify(response));
  });
}

module.exports = {
  createServer,
};
