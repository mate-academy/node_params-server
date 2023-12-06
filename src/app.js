/* eslint-disable no-console */

'use strict';

const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  const normalizedURL = new URL(req.url, `http://${req.headers.host}`);
  const parts = normalizedURL.pathname.split('/').slice(1);
  const params = Object.fromEntries(normalizedURL.searchParams.entries());

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
