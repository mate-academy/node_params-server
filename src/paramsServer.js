'use strict';

const http = require('http');

function paramsServer() {
  const server = http.createServer((request, response) => {
    const [part, queryString] = request.url.split('?');
    const cleanPart = part.slice(1);

    let parts = [];

    if (cleanPart.length > 0) {
      parts = cleanPart.split('/');
    }

    const query = new URLSearchParams(queryString);

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
