/* eslint-disable no-console */
'use strict';

const http = require('http');

function parseQueryString(queryString) {
  if (!queryString) {
    return {};
  }

  return queryString.split('&').reduce((query, pair) => {
    if (!pair) {
      return query;
    }

    const [key, value = ''] = pair.split('=');

    query[key] = value;

    return query;
  }, {});
}

function getPathParts(pathname) {
  return pathname.split('/').filter(Boolean);
}

function createServer() {
  return http.createServer((request, response) => {
    response.setHeader('Content-Type', 'application/json');

    const [pathname, queryString = ''] = request.url.split('?');
    const parts = getPathParts(pathname);
    const query = parseQueryString(queryString);

    response.end(JSON.stringify({ parts, query }));
  });
}

module.exports = {
  createServer,
};
