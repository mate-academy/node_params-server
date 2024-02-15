'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    const [pathname, query] = req.url.split('?');
    const params = new URLSearchParams(query);

    res.setHeader('Content-Type', 'application/json');

    const result = {};

    if (pathname.length) {
      result.parts = pathname.replace(/^\/+/, '').split('/');
    };

    if (params) {
      result.query = Object.fromEntries(params);
    };

    res.end(JSON.stringify(result));
  });
}

module.exports = {
  createServer,
};
