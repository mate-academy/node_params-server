'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    res.setHeader('Content-type', 'application/json');

    const requestUrlString = `http://${req.headers.host}${req.url}`;
    const requestUrl = new URL(requestUrlString);

    const parts = requestUrl
      .pathname
      .slice(1)
      .split('/');

    const searchParams = requestUrl.searchParams;
    const query = {};

    searchParams.forEach((value, name) => {
      query[name] = value;
    });

    const responseBody = JSON.stringify({
      parts,
      query,
    });

    res.statusCode = 200;
    res.end(responseBody);
  });
}

module.exports = {
  createServer,
};
