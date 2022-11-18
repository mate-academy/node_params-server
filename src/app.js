/* eslint-disable no-console */
'use strict';

const http = require('http');

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  const normalizedUrl = new URL(req.url, `http://${req.headers.host}`);

  let parts = [];

  if (normalizedUrl.pathname) {
    parts = normalizedUrl.pathname.split('/').slice(1);
  }

  let query = '';

  if (normalizedUrl.searchParams) {
    query = Object.fromEntries(normalizedUrl.searchParams.entries());
  }

  const data = {
    parts,
    query,
  };

  res.end(JSON.stringify(data));
});

server.listen(PORT, () => {
  console.log('Server is running');
});
