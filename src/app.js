'use strict';

const http = require('http');

const PORT = process.env.PORT || 3000;
const origin = `http://localhost:${PORT}`;

const server = http.createServer((req, res) => {
  const normalizedURL = new URL(req.url, origin);
  const { pathname, searchParams } = normalizedURL;
  const parts = pathname.split('/').slice(1);
  const query = Object.fromEntries(searchParams.entries());

  res.setHeader('Content-Type', 'application/json');

  res.end(JSON.stringify({
    parts, query,
  }));
});

const pathnameAndSearch = '/hello/world/123?x=1&search=some';

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on ${origin + pathnameAndSearch}`);
});
