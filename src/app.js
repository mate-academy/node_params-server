/* eslint-disable no-console */
'use strict';

const http = require('http');

require('dotenv').config();

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const normalizeURL = new URL(req.url, `http://${req.headers.host}`);
  const params = Object.fromEntries(normalizeURL.searchParams.entries());
  const parts = normalizeURL.pathname.slice(1).split('/');

  res.end(JSON.stringify({ parts, query: params }));
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
