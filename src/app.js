'use strict';
/* eslint-disable no-console */

const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const normilizedURL = new URL(req.url, `http://${req.headers.host}`);
  const parts = normilizedURL.pathname.slice(1).split('/');
  const query = Object.fromEntries(normilizedURL.searchParams.entries());

  res.setHeader('Content-Type', 'application/json');

  res.end(JSON.stringify({
    parts,
    query,
  }));
});

server.listen(PORT, () => {
  console.log('Server is running');
});
