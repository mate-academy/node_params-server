/* eslint-disable no-console */
'use strict';

const http = require('node:http');

function createServer() {
  return http.createServer((request, response) => {
    const url = new URL('http://' + request.headers.host + request.url);

    const parts = url.pathname.split(/\/+/).filter((part) => part);

    const query = Object.fromEntries(url.searchParams.entries());

    const responseBody = { parts, query };

    response.statusCode = 200;
    response.setHeader('content-type', 'application/json');

    response.end(JSON.stringify(responseBody));
  });
}

module.exports = {
  createServer,
};
