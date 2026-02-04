/* eslint-disable no-console */
'use strict';

function createServer() {
  const server = require('http').createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    const url = new URL(req.url, `http://${req.headers.host}`);
    const path = url.pathname;
    const params = new URLSearchParams(url.searchParams);
    const paramsObj = Object.fromEntries(params.entries());

    const result = {
      parts: path.split('/').filter(Boolean),
      query: paramsObj,
    };

    res.statusCode = 200;
    res.end(JSON.stringify(result));
  });

  return server;
}

module.exports = {
  createServer,
};
