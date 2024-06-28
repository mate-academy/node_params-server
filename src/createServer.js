/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    const reqUrl = new URL(`http://${req.headers.host}${req.url}`);
    const parts = reqUrl.pathname.split('/').filter((part) => part !== '');

    const query = {};

    reqUrl.searchParams.forEach((value, key) => {
      query[key] = value;
    });

    const response = {
      parts: parts,
      query: query,
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response));
  });
}

module.exports = {
  createServer,
};
