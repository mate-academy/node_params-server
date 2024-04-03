/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    let url;

    req.url.includes('//')
      ? url = req.url.slice(1)
      : url = req.url;

    const {
      pathname,
      searchParams,
    } = new URL(url, `http://${req.headers.host}`);
    const parts = pathname.slice(1).split('/');
    const query = Object.fromEntries(searchParams.entries());

    const responseData = {
      parts,
      query,
    };

    const responseBody = JSON.stringify(responseData);

    res.end(responseBody);
  });
}

module.exports = {
  createServer,
};
