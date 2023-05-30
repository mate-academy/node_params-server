'use strict';

const http = require('http');

const createServer = () => {
  const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'application/json');

    const { pathname, searchParams } = new URL(
      request.url,
      `http://${request.headers.host}`
    );
    const parts = pathname.slice(1).split('/');
    const query = Object.fromEntries(searchParams.entries());

    const responseBody = {
      parts,
      query,
    };

    response.statusCode = 200;
    response.end(JSON.stringify(responseBody));
  });

  return server;
};

createServer();

module.exports.createServer = createServer;
