/* eslint-disable no-console */
'use strict';

const http = require('http');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.statusCode = 200;

  const normalize = new URL(req.url, 'http://localhost:3000');
  const parts = normalize.pathname.slice(1).split('/');
  const query = Object.fromEntries(normalize.searchParams.entries());

  res.end(JSON.stringify({
    parts,
    query,
  }));
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
