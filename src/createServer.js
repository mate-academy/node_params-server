/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((request, response) => {
    const url = new URL(request.url, `http://${request.headers.host}`);
    const parts = url.pathname.split('/').filter(Boolean);
    const query = Object.fromEntries(url.searchParams.entries());

    response.setHeader('Content-Type', 'application/json');

    response.end(JSON.stringify({ parts, query }));
  });
}

module.exports = {
  createServer,
};
