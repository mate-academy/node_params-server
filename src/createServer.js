/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    const host = req.headers.host;
    const fullUrl = `http://${host}${req.url}`;
    const url = new URL(fullUrl);

    const pathname = url.pathname;
    const pathSegments = pathname
      .split('/')
      .filter((segment) => segment !== '');

    const searchParams = url.searchParams;
    const queryParams = Object.fromEntries(searchParams);

    const responseData = {
      parts: pathSegments,
      query: queryParams,
    };

    const json = JSON.stringify(responseData);

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(json);
  });
}

module.exports = {
  createServer,
};
