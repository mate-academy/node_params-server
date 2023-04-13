/* eslint-disable no-console */
'use strict';

const http = require('http');

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  const normalizedURL = new URL(req.url, `http://${req.headers.host}`);
  const parts = normalizedURL.pathname.split('/').filter(part => part !== '');
  const query = Object.fromEntries(normalizedURL.searchParams.entries());

  res.setHeaders('Content-Type', 'application/json');
  res.writeHeader(200, 'OK');

  res.end(JSON.stringify({
    parts,
    query,
  }));
});

server.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
