/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    const { pathname, searchParams } = new URL(
      req.url.replace(/\/{2,}/g, '/'),
      `http://${req.headers.host}`);

    const parts = pathname.split('/').filter(part => part);

    const queryObject = [...searchParams].reduce((prev, [key, value]) => {
      return {
        ...prev,
        [key]: value,
      };
    }, {});

    const responseData = {
      parts: parts,
      query: queryObject,
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(responseData));
  });

  return server;
}

module.exports = {
  createServer,
};
