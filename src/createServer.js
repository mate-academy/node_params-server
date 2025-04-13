/* eslint-disable no-console */
'use strict';

const server = require('http');

const { getResult } = require('./getResult');

function createServer() {
  return server.createServer((req, res) => {
    if (req.url) {
      res.writeHead(200, { 'content-type': 'application/json' });
    }

    let result = {};

    if (!req.url.includes('?')) {
      result = getResult(req.url);
    }

    if (req.url.includes('?')) {
      const [text, query] = req.url.split('?');

      result = getResult(text, query);
    }

    res.end(JSON.stringify(result));
  });
}

module.exports = {
  createServer,
};
