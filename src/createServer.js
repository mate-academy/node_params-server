'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    const url = new URL(req.url.slice(1), `http://${req.headers.host}`);

    const result = {
      parts: url.pathname.split(/\/+/).filter((v) => !!v),
      query: {},
    };

    url.searchParams.forEach((value, key) => {
      result.query[key] = value;
    });

    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify(result));
  });
}

module.exports = {
  createServer,
};
