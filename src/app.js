'use strict';

const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  const normalizedURL = new URL(req.url, `http://${req.headers.host}`);
  const partsFromURL = normalizedURL.pathname.slice(1);
  const parts = partsFromURL.split('/');
  const query = Object.fromEntries(normalizedURL.searchParams.entries());
  const result = {
    parts, query,
  };

  res.end(JSON.stringify(result));
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = { server };
