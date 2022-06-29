'use strict';

/* eslint-disable no-console */
const http = require('http');

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  const normalizedURL = new URL(req.url, `http://${req.headers.host}`);

  const responseObj = {
    parts: normalizedURL.pathname.slice(1).split('/'),
    query: Object.fromEntries(normalizedURL.searchParams.entries()),
  };

  res.end(JSON.stringify(responseObj));
});

server.listen(PORT, () => {
  console.log(`server is running on port: http://localhost:${PORT}`);
});
