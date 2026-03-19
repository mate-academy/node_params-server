/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((request, response) => {
    if (!request.url) {
      response.statusCode = 400;
      response.end('Bad Request');

      return;
    }

    const [pathname, queryString] = request.url.split('?');
    const parts = pathname.split('/').filter(Boolean);
    const queryParams = new URLSearchParams(queryString || '');
    const query = Object.fromEntries(queryParams);

    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify({ parts, query }));
  });
}

module.exports = {
  createServer,
};
