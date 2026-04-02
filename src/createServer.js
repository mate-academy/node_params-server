/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);

    const reqPath = url.pathname.slice(1);
    const pathParts = reqPath.split('/').filter(Boolean);

    const query = url.searchParams.entries();
    const queryObject = {};

    for (const [key, value] of query) {
      queryObject[key] = value;
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ parts: pathParts, query: queryObject }));
  });
}

module.exports = {
  createServer,
};
