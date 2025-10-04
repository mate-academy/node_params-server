/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    const [pathPart, queryString] = req.url.split('?');
    const pathParts = pathPart.split('/').filter((x) => x !== '');

    const queryParts = {};

    if (queryString) {
      const params = new URLSearchParams(queryString);

      for (const [key, value] of params.entries()) {
        queryParts[key] = value;
      }
    }

    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.statusMessage = 'OK';

    res.end(
      JSON.stringify({
        parts: pathParts,
        query: queryParts,
      }),
    );
  });

  return server;
}

module.exports = {
  createServer,
};
