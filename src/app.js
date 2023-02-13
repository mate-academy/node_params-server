'use strict';

const http = require('http');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const normalizedURL = new URL(req.url, `http://${req.headers.host}`);

  res.setHeader('Content-Type', 'application/json');

  const partsOfPathname = normalizedURL.pathname
    .slice(1)
    .split('/');

  const queryParams = Object.fromEntries(
    normalizedURL.searchParams.entries()
  );

  res.end(JSON.stringify({
    parts: partsOfPathname,
    query: queryParams,
  }));
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});