/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    res.setHeader('Content-type', 'application/json');

    const normalizedUrl = new URL(req.url, `http://${req.headers.host}`);
    const path = normalizedUrl.pathname;
    const parts = path.split('/').filter((e) => e.length > 0);
    const params = Object.fromEntries(normalizedUrl.searchParams);

    console.log(parts + 'here' + path);

    const data = {
      parts,
      query: params,
    };

    res.statusCode = 200;
    res.end(JSON.stringify(data));
  });
}

module.exports = {
  createServer,
};
