'use strict';
/* eslint-disable no-console */

const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const normalizedURL = new URL(req.url, `http://${req.headers.host}`);
  const obj = {};
  const parts = normalizedURL.pathname.slice(1).split('/');

  obj['parts'] = parts;

  const params = Object.fromEntries(normalizedURL.searchParams.entries());

  obj['query'] = params;

  res.end(JSON.stringify(obj));
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
