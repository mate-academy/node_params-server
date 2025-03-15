/* eslint-disable no-console */
'use strict';

const http = require('node:http');

function createServer() {
  const server = http.createServer((req, res) => {
    const { pathname, searchParams } = new URL(
      req.url,
      `http://${req.headers.host}`,
    );
    const parts = pathname.split('/').filter(Boolean);
    const query = {};

    for (const [key, value] of searchParams.entries()) {
      query[key] = value === null ? '' : value;
    }

    const responseObj = { parts, query };

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(responseObj));
  });

  return server;
}

module.exports = {
  createServer,
};
