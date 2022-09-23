/* eslint-disable no-console */
'use strict';

const http = require('http');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const normalizeURL = new URL(req.url, `http://${req.headers.host}`);

  console.log({
    parts: normalizeURL.pathname.split('/').slice(1),
    query: Object.fromEntries(normalizeURL.searchParams.entries()),
  });
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
