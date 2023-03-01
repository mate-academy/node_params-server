'use strict';

const http = require('http');

const server = http.createServer((req, res) => {
  const normalizedUrl = new URL(req.url, `http://${req.headers.host}`);
  const { searchParams } = normalizedUrl;

  const parts = normalizedUrl.pathname.slice(1).split('/');
  const query = {};

  for (const key of searchParams.keys()) {
    const value = searchParams.getAll(key);

    query[key] = value.length > 1
      ? value
      : value[0];
  }

  res.setHeader('Content-Type', 'application/json');

  res.end(JSON.stringify({
    parts,
    query,
  }));
});

server.listen(3000);
