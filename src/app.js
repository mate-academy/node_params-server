/* eslint-disable no-console */
'use strict';

const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const normalizedUrl = new URL(req.url, `http://${req.headers.host}`);

  const pathname = normalizedUrl.pathname;
  const parts = pathname.split('/').filter(part => part !== '');

  const query = {};

  if (normalizedUrl.searchParams) {
    for (const [key, value] of normalizedUrl.searchParams.entries()) {
      if (query.hasOwnProperty(key)) {
        if (Array.isArray(query[key])) {
          query[key].push(value);
        } else {
          query[key] = [query[key], value];
        }
      } else {
        query[key] = value;
      }
    }
  }

  const response = {
    parts,
    query,
  };

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(response));
});

server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
