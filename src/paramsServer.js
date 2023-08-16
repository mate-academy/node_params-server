'use strict';

const http = require('http');

function paramsServer() {
  const server = http.createServer((request, response) => {
    const [part, queryString] = request.url.split('?');

    const query = new URLSearchParams(queryString);
    const parts = part.slice(1).split('/');

    const responseJson = {
      parts,
      query: Object.fromEntries(query),
    };

    response.setHeader('Content-Type', 'application/json');
    response.statusCode = 200;
    response.end(JSON.stringify(responseJson));
  });

  return server;
}

module.exports = { paramsServer };
