/* eslint-disable no-console */
'use strict';

const http = require('http');
const PORT = process.argv.PORT || 3009;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.statusCode = 200;

  const normalizedUrl = new URL(req.url, `http://localhost:${PORT}`);
  const parts = normalizedUrl.pathname.split('/').slice(1);
  const query = Object.fromEntries(
    normalizedUrl.searchParams.entries()
  );

  console.log(
    parts,
    query
  );

  res.end(JSON.stringify({
    parts,
    query,
  }));
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
