'use strict';

const http = require('http');

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  const normalizedURL = new URL(req.url, `http://${req.headers.host}`);
  const pathnameParts = normalizedURL.pathname.split('/').slice(1);
  const params = Object.fromEntries(normalizedURL.searchParams.entries());
  const partsQuery = JSON.stringify({
    parts: pathnameParts, query: params,
  });

  res.end(partsQuery);
});

server.listen(PORT, () => {
  /* eslint no-console: */
  console.log(`Server is running on http://localhost:${PORT}`);
});
