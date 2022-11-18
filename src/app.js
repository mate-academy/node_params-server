/* eslint-disable no-console */
'use strict';

const http = require('http');

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  const normalizedUrl = new URL(req.url, `http://${req.headers.host}`);
  const parts = normalizedUrl.pathname.split('/').slice(1);
  const query = Object.fromEntries(normalizedUrl.searchParams.entries());

  res.setHeader('Content-Type', 'application/json');

  res.end(JSON.stringify({
    parts,
    query,
  }));
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
