/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    const [pathName, searchQuery] = req.url.split('?');
    const parts = pathName
      .split('/')
      .filter(part => !!part);
    const params = new URLSearchParams(searchQuery);
    const query = Object.fromEntries(params.entries());

    res.writeHead(200, { 'Content-Type': 'application/json' });

    res.end(JSON.stringify({
      parts,
      query,
    }));
  });
}

module.exports = {
  createServer,
};
