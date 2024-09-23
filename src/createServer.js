/* eslint-disable no-console */
'use strict';

const http = require('http');
const { getParams } = require('./getParams');
const BASE = 'http://localhost:5701';

function createServer() {
  return http.createServer((req, res) => {
    const normalizedUrl = new URL(req.url.slice(1), BASE);
    const pathArray = normalizedUrl.pathname.split('/').filter((elem) => elem);
    const response = { query: getParams(normalizedUrl.searchParams) };

    if (pathArray.length) {
      response.parts = pathArray;
    }

    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json');
    res.end(JSON.stringify(response));
  });
}

module.exports = {
  createServer,
};
