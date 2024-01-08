/* eslint-disable no-console */
'use strict';

const http = require('http');
const PORT = process.env.PORT || 3007;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  const normalizedUrl = new URL(req.url, 'http:/' + req.headers.host);

  console.log(normalizedUrl);

  const parts = normalizedUrl.pathname.slice(1)
    .split('/').filter(el => el.length > 0);
  const query = Object.fromEntries(normalizedUrl.searchParams.entries());

  res.end(JSON.stringify({
    parts,
    query,
  }));
});

server.listen(PORT, () => {
});
