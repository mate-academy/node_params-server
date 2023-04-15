/* eslint-disable no-console */
'use strict';

const http = require('http');

const PORT = process.env.port || 3000;

const server = http.createServer((req, res) => {
  const normalizedURL = new URL(req.url, `http://${req.headers.host}`);
  const parts = normalizedURL.pathname.slice(1).split('/');
  const query = Object.fromEntries(normalizedURL.searchParams.entries());

  const response = JSON.stringify({
    parts,
    query,
  });

  res.end(response);
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
