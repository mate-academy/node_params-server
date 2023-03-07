'use strict';

const http = require('http');

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  const normalizedURL = new URL(req.url, `http://${req.headers.host}`);
  const parts = normalizedURL.pathname.split('/').slice(1);
  const query = {};

  normalizedURL.searchParams.forEach((value, key) => {
    if (!query[key]) {
      query[key] = value;
    } else {
      if (!Array.isArray(query[key])) {
        query[key] = [query[key]];
      }

      query[key].push(value);
    }
  });

  res.setHeader('Content-Type', 'application/json');

  res.end(JSON.stringify({
    parts,
    query,
  }));
});

server.listen(PORT, () => {
  global.console.log(`Server is running on http://localhost:${PORT}`);
});
