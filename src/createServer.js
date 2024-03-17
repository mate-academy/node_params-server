/* eslint-disable no-console */
'use strict';

const http = require('http');
const { normalizeUrl } = require('./normalizeUrl');
const getParts = require('./getParts');
const getQueryParams = require('./getQueryParams');

function createServer() {
  const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    try {
      const parsed = normalizeUrl(req.url);
      const parts = getParts(parsed);
      const query = getQueryParams(req);
      const response = {
        parts,
        query,
      };

      res.statusCode = 200;
      res.end(JSON.stringify(response));
    } catch (error) {
      res.statusCode = 400;
      res.end('Error');
    }
  });

  return server;
}

module.exports = {
  createServer,
};
