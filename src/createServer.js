/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    const [pathname = '', search = ''] = req.url.split('?');
    const parts = pathname.split('/').filter(Boolean);
    const query = Object.fromEntries(new URLSearchParams(search).entries());

    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify({ parts, query }));
  });
}

module.exports = {
  createServer,
};
