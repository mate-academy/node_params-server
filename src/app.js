/* eslint-disable no-console */

'use strict';

const http = require('http');

const PORT = process.env.PORT || 3010;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  const normalizedURL = new URL(req.url, `http://${req.headers.host}`);
  const parts = normalizedURL.pathname.split('/').slice(1);

  const params = {};

  normalizedURL.searchParams.forEach((value, key) => {
    if (params[key]) {
      params[key].push(value);
    } else {
      params[key] = [value];
    }
  });

  res.end(
    JSON.stringify({
      parts,
      query: params,
    }),
  );
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
