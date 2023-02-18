/* eslint-disable no-console */
'use strict';

const PORT = 5000;
const http = require('http');

const server = http.createServer((req, res) => {
  const normalizedURL = new URL(req.url, `http://${req.headers.host}`);
  const pathnames = normalizedURL.pathname
    .split('/')
    .filter((path) => path !== '');
  const query = Object.fromEntries(normalizedURL.searchParams.entries());

  console.log(new URL(req.url, `http://${req.headers.host}`));

  res.end(JSON.stringify({
    'parts': pathnames,
    'query': query,
  }));
});

server.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
