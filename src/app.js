'use strict';

const http = require('http');

const PORT = 8080;
const href = `http://localhost:${PORT}`;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });

  const normalizedURL = new URL(req.url, `http://${req.headers.host}`);
  const parts = normalizedURL.pathname.slice(1).split('/');
  const query = Object.fromEntries(normalizedURL.searchParams.entries());
  const body = JSON.stringify({
    parts: parts,
    query: query,
  });

  res.end(body);
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on ${href}`);
});

const request = http.request(`${href}/hello/world/123?x=1&search=some`);

request.end();
