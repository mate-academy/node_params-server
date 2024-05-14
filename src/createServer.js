/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    const reqUrlData = req.url.split('?');

    const parts = reqUrlData[0]
      .split('/')
      .filter((data) => data !== '/' && data !== '');

    const params = new URLSearchParams(reqUrlData[1]);

    const query = {};

    for (const [key, value] of params.entries()) {
      query[key] = value;
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ parts, query }));
  });
}

module.exports = {
  createServer,
};
