/* eslint-disable no-console */
'use strict';

const http = require('http');
const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  const normalizedUrl = new URL(req.url, `http://localhost:${PORT}`);
  const parts = normalizedUrl.pathname.slice(1).split('/') || [];
  const query = Object.fromEntries(normalizedUrl.searchParams.entries()) || {};

  res.setHeader('Content-type', 'application/json');

  res.end(JSON.stringify({
    parts,
    query,
  }));
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
