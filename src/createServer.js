/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((request, response) => {
    const normalizedUrl = new URL(request.url, 'http://localhost');
    const query = Object.fromEntries(normalizedUrl.searchParams.entries());
    const pathName = normalizedUrl.pathname.startsWith('//')
      ? normalizedUrl.pathname.slice(2)
      : normalizedUrl.pathname;

    const parts = pathName.startsWith('/')
      ? pathName.slice(1).split('/')
      : pathName.split('/');
    const result = {
      query,
      parts,
    };

    response.setHeader('content-type', 'application/json');
    response.statusCode = 200;

    return response.end(JSON.stringify(result));
  });
  // hello/world/123

  return server;
}

module.exports = {
  createServer,
};
