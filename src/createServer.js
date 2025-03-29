/* eslint-disable no-console */
'use strict';

const http = require('node:http');
const { getPathParts, getQueryParams } = require('./utils/urlHelper');

const PROTOCOL = 'http';
const OK_CODE = 200;

function createServer() {
  return http.createServer((req, res) => {
    req.setEncoding('utf-8');
    res.setHeader('Content-Type', 'application/json');

    const base = `${PROTOCOL}://${req.headers.host}`;
    const { searchParams } = new URL(req.url, base);
    const path = req.url.split('?')[0];

    const parts = getPathParts(path.slice(1));
    const query = getQueryParams(searchParams);

    const responseObj = {
      parts,
      query,
    };

    res.statusCode = OK_CODE;
    res.end(JSON.stringify(responseObj));
  });
}

module.exports = {
  createServer,
};
