/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((request, response) => {
    response.setHeader('Content-Type', 'application/json');

    const fixedUrl = request.url.replace(/\/\/+/g, '/');
    const url = new URL(fixedUrl, `http://${request.headers.host}`);
    const parts = url.pathname.split('/').filter((part) => part !== '');
    const query = Object.fromEntries(url.searchParams.entries());

    response.write(
      JSON.stringify({
        parts: parts,
        query: query,
      }),
    );
    response.end();
  });
}

module.exports = {
  createServer,
};
