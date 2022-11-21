/* eslint-disable no-console */
'use strict';

const http = require('http');
const { convertPathName } = require('./convertPathName');
const { convertSearchParams } = require('./convertSearchParams');

function createServer() {
  const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    const urlFromRequest = new URL(req.url, 'http://localhost:5700');

    const pathNames = urlFromRequest.pathname;
    const request = urlFromRequest.search.slice(1);

    const query = convertSearchParams(request);
    const parts = convertPathName(pathNames);

    const responseBody = {
      parts,
      query,
    };

    res.statusCode = 200;
    const response = JSON.stringify(responseBody);

    res.end(response);
  });

  return server;
}

module.exports = { createServer };
