/* eslint-disable no-console */
'use strict';

const http = require('http');
const PORT = process.env.PORT || 3001;

const server = http.createServer((req, res) => {
  const normalizedURL = new URL(req.url, `http://${req.headers.host}`);

  const parts
    = normalizedURL.pathname.slice(1).length > 0
      ? normalizedURL.pathname.slice(1).split('/')
      : [];

  const query = {};

  normalizedURL.searchParams.forEach((value, key) => {
    if (query[key]) {
      query[key] = [...query[key], value];

      return;
    }
    query[key] = value;
  });

  const response = {
    parts,
    query,
  };

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(response));
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
