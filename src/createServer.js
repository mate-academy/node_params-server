/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;

    const url = new URL(req.url, `http://${req.headers.host}`);
    const parts = url.pathname.slice(1).split('/');
    const search = url.searchParams;
    const query = {};

    search.forEach((value, key) => {
      if (value && key) {
        query[key] = value;
      }
    });

    // for (const [key, value] of search.entries()) {
    //   query[key] = value;
    // }

    const result = {
      parts, query,
    };

    console.log(result);

    res.end(JSON.stringify(result));
  });
}

module.exports = {
  createServer,
};
