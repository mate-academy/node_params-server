/* eslint-disable no-console */
'use strict';

const http = require('http');

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  const normilizedURL = new URL(req.url, `http://${req.headers.host}`);

  res.writeHead(200, { 'Content-Type': 'application/json' });

  const params = Object.fromEntries(normilizedURL.searchParams.entries());

  const json = JSON.stringify({
    parts: normilizedURL.pathname.split('/').slice(1),
    query: params,
  });

  res.end(json);
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
