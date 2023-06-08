/* eslint-disable no-console */
'use strict';

const http = require('http');

const server = http.createServer((req, res) => {
  const normalizedUrl = new URL(
    req.url,
    `http://${req.headers.host}`
  );

  const { pathname } = normalizedUrl;
  const parts = pathname.split('/').filter(part => part !== '');

  const query = normalizedUrl.searchParams;

  const response = {
    parts,
    query,
  };

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(response));
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
