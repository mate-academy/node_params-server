/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    const reqUrl = new URL(`http://${req.headers.host}${req.url}`);
    let parts = reqUrl.pathname.split('/');

    if (parts.length === 1 && parts[0] === '') {
      parts = [];
    }

    const query = {};

    reqUrl.searchParams.forEach((value, key) => {
      query[key] = value;
    });

    const response = {
      parts: parts.filter((part) => part !== '' || parts.length === 1),
      query: query,
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response));
  });
}

module.exports = {
  createServer,
};
