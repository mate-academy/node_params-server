'use strict';

const http = require('http');
const PORT = process.env.PORT || 3006;

const server = http.createServer((req, res) => {
  const normalizedURL = new URL(req.url, `http://localhost:${PORT}`);

  const parts = normalizedURL.pathname.split('/').filter(part => part !== '');
  const query = Object.fromEntries(normalizedURL.searchParams.entries());

  const jsonResponse = {
    parts: parts,
    query: query,
  };

  res.end(JSON.stringify(jsonResponse, null, 2));
});

server.listen(PORT);
