'use strict';

const http = require('http');

const PORT = process.env.PORT || 8080;
const server = http.createServer((req, res) => {
  const normalizedURL = new URL(req.url, `http://${req.headers.host}`);

  const parts = normalizedURL.pathname.slice(1).split('/');
  const query = Object.fromEntries(normalizedURL.searchParams.entries());

  res.end(JSON.stringify({
    parts,
    query,
  }));
});

server.listen(PORT);
