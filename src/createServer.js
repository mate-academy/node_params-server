
'use strict';

const http = require('http');

const createServer = () => {
  const server = http.createServer((req, res) => {
    const path = new URL(req.url, 'http://localhost/');
    const parts
      = path.pathname === '/'
        ? [path.hostname]
        : path.pathname.split('/').filter((e) => e.length > 0);

    const query = {};

    path.searchParams.forEach((value, key) => {
      if (query[key] === undefined) {
        query[key] = value;
      } else if (Array.isArray(query[key])) {
        query[key].push(value);
      } else {
        query[key] = [query[key], value];
      }
    });

    res.writeHead(200, { 'Content-Type': 'application/json' });

    res.end(
      JSON.stringify({
        parts,
        query,
      })
    );
  });

  return server;
};

module.exports = {
  createServer,
};
