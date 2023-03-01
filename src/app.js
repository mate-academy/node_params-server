'use strict';

const http = require('http');

const server = http.createServer((req, res) => {
  const normalizedURL = new URL(req.url, `http://${req.headers.host}`);
  const parts = normalizedURL.slice(1).split('/');
  const query = Object.fromEntries(normalizedURL.searchParams.entries());

  const reqObj = {
    parts,
    query,
  };

  res.setHeader('Content-Type', 'application/json');

  res.end(JSON.stringify(reqObj));
});

server.listen(3000);
