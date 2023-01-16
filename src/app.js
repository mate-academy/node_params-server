/* eslint-disable no-console */
'use strict';

const http = require('http');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  const normalizedURL = new URL(req.url, `http://${req.headers.host}`);
  const parts = normalizedURL.pathname.slice(1).split('/');
  const query = Object.fromEntries(normalizedURL.searchParams.entries());
  const responseBody = {
    parts,
    query,
  };

  res.end(JSON.stringify(responseBody));
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
