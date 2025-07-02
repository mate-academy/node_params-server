/* eslint-disable no-console */
'use strict';

const http = require('node:http');

function createServer() {
  return http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    const url = req.url;

    const myUrl = new URL(url, 'http://localhost');
    const pathname = myUrl.pathname.split('/').filter(Boolean);

    const query = {};

    for (const [key, value] of myUrl.searchParams.entries()) {
      query[key] = value;
    }

    const result = { parts: pathname, query };

    res.end(JSON.stringify(result));
  });
}

module.exports = {
  createServer,
};
