'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    const [pathname, queryString] = req.url.split('?');

    const parts = pathname.split('/').filter((part) => part.length > 0);

    const query = Object.fromEntries(new URLSearchParams(queryString));

    res.setHeader('content-type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify({ parts, query }));
  });
}

module.exports = {
  createServer,
};
