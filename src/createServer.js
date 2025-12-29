/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    const [pathPart, queryPart] = req.url.split('?');
    const pathParts = pathPart.split('/').filter((part) => part !== '');
    const params = new URLSearchParams(queryPart);
    const resultParams = Object.fromEntries(params);

    const responseBody = {
      parts: pathParts,
      query: resultParams,
    };

    res.end(JSON.stringify(responseBody));
  });

  return server;
}

module.exports = {
  createServer,
};
