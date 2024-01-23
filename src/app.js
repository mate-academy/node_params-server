/* eslint-disable no-console */
'use strict';

const http = require('http');

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;

  const normalizedUrl = new URL(req.url, `http://${req.headers.host}`);
  const parts = normalizedUrl.pathname.slice(1).split('/');
  const searchParams = normalizedUrl.searchParams;
  const query = {};

  for (const [key, value] of searchParams.entries()) {
    query[key] = value;
  }

  res.end(JSON.stringify({
    parts, query,
  }));
});

server.listen(PORT, () => {
  console.log('Server is running');
});
