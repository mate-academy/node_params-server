/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  /* Write your code here */
  // Return instance of http.Server class
  return http.createServer((req, res) => {
    const baseUrl = `http://${req.headers.host}`;
    const parsedUrl = new URL(req.url, baseUrl);
    const pathParts = parsedUrl.pathname.split('/').filter(Boolean);
    const queryParams = {};

    parsedUrl.searchParams.forEach((value, key) => {
      queryParams[key] = value;
    });

    const response = {
      parts: pathParts,
      query: queryParams,
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response));
  });
}

module.exports = {
  createServer,
};
