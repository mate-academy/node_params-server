/* eslint-disable no-console */
'use strict';

const http = require('http');
const url = require('node:url');

const { getPathnameParts } = require('./getPathnameParts');
const { getQueryParts } = require('./getQueryParts');

function createServer() {
  const server = http.createServer((req, res) => {
    const path = url.parse(req.url).pathname || '';
    const params = url.parse(req.url).query || '';

    res.writeHead(200, { 'Content-type': 'application/json' });

    res.end(
      JSON.stringify({
        parts: getPathnameParts(path),
        query: getQueryParts(params),
      }),
    );
  });

  return server;
}

module.exports = {
  createServer,
};
