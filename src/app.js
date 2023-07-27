'use strict';

const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  const normalizedUrl = new url.URL(req.url, `http://${req.headers.host}`);

  const parts = normalizedUrl.pathname.slice(1).split('/');
  const query = {};

  for (const [key, value] of normalizedUrl.searchParams.entries()) {
    if (!query[key]) {
      query[key] = value;
    } else {
      if (query[key] instanceof Array) {
        query[key].push(value);
      } else {
        query[key] = [query[key], value];
      }
    }
  }

  res.end(
    JSON.stringify({
      parts,
      query,
    })
  );
});

server.listen(3000);
