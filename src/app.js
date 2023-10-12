'use strict';

const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-type', 'application/json');

  const normalizeUrl = new URL(req.url, 'http://localhost:8888');
  const parts = normalizeUrl.pathname.slice(1).split('/');
  const queryParams = normalizeUrl.searchParams;

  const query = {};

  for (const [key, value] of queryParams) {
    query[key] = value;
  }

  res.end(JSON.stringify({
    parts,
    query,
  }));
});

server.listen(8888, () => {
  // eslint-disable-next-line no-console
  console.log('Server created');
});
