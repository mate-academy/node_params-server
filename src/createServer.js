/* eslint-disable no-console */
'use strict';

const http = require('node:http');

function createServer() {
  const server = http.createServer((request, response) => {
    const { url } = request;
    let responseBody;

    response.setHeader('Content-Type', 'application/json');

    try {
      const [path, queryParams] = url.split('?');
      const pathParts = getPathParts(path);
      const queryObj = getQueryParams(queryParams);

      responseBody = {
        parts: pathParts,
        query: queryObj,
      };
      response.end(JSON.stringify(responseBody));
    } catch (err) {
      response.statusCode = 500;
      response.end(JSON.stringify({ errors: [{ message: err.message }] }));
    }
  });

  return server;
}

function getPathParts(path) {
  return path.split('/').filter(Boolean);
}

function getQueryParams(queryParams) {
  const params = new URLSearchParams(queryParams);
  const queryObj = {};

  params.forEach((value, key) => (queryObj[key] = value));

  return queryObj;
}

module.exports = {
  createServer,
};
