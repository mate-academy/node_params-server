/* eslint-disable no-console */
'use strict';

const http = require('http');

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  const normalizeUrl = new URL(req.url, 'http://req.heades.host');
  const parts = normalizeUrl.pathname.slice(1).split('/');
  const params = Object.fromEntries(normalizeUrl.searchParams.entries());
  const result = { parts, params };
  const prepearedResult = JSON.stringify(result);

  res.end(prepearedResult);
});

server.listen(8080, () => {
  console.log(`Server  is running on http://localhost:${PORT}`);
});
