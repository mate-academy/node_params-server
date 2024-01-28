/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((request, response) => {
    if (request.url === '/favicon.ico') {
      return;
    }

    const requestURL = new URL(request.url, `http://${request.headers.host}`);
    const result = {
      parts: requestURL.pathname.split('/').filter((el) => el),
      query: Object.fromEntries(requestURL.searchParams),
    };

    response.setHeader('Content-Type', 'application/json');
    response.statusCode = 200;

    console.log(requestURL);

    response.end(JSON.stringify(result));
  });
}

module.exports = {
  createServer,
};
