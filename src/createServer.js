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

      res.end(JSON.stringify(response));
    } catch (error) {
      res.end('Error');
    }
  });

  return server;
}

module.exports = {
  createServer,
};
