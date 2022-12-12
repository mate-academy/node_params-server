'use strict';

const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const normalizedURL = new URL(req.url, `http://${req.headers.host}`);
  const parts = normalizedURL.pathname.split('/').slice(1);
  const entries = normalizedURL.searchParams.entries();
  const query = {};

  for (const [key, value] of entries) {
    query[key] = key in query ? [...query[key], value] : value;
  }

  res.end(JSON.stringify({
    parts,
    query,
  }),
  );
});

server.listen(PORT);
