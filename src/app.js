'use strict';

const http = require('http');

const server = http.createServer((req, res) => {
  const normalizedURL = new URL(req.url, 'http://localhost:5000');
  const pathnameParts = normalizedURL.pathname.split('/')
    .filter(part => part !== '');
  const queryParams = {};

  for (const [key, value] of normalizedURL.searchParams) {
    queryParams[key] = value;
  }

  const jsonResponse = {
    parts: pathnameParts,
    query: queryParams,
  };

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(jsonResponse));
});

const PORT = 5000;

server.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`Server is running on http://localhost:${PORT}`);
});
