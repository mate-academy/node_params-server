/* eslint-disable no-console */
'use strict';

const http = require('http');

const server = http.createServer((req, res) => {
  const normalizedURL = new URL(req.url, 'http://localhost:3000');

  const parts = normalizedURL.pathname.slice(1).split('/');
  const query = Object.fromEntries(normalizedURL.searchParams.entries());

  res.end(JSON.stringify({
    parts,
    query,
  }));
});

server.listen(3000, () => {
  console.log(`Server is running on 3000`);
});
