'use strict';

const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;

  const normalizedURL = new URL(req.url, `http://${req.headers.host}`);

  const parts = normalizedURL.pathname.split('/').filter((part) => part !== '');

  const query = Object.fromEntries(normalizedURL.searchParams.entries());

  res.end(JSON.stringify({
    parts: parts,
    query: query,
  }, null, 3));
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${PORT}`);
});
