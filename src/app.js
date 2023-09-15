/* eslint-disable no-console */
'use strict';

const http = require('http');
const PORT = 8080;

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = url.pathname.replace('/', '');
  const parts = pathname ? pathname.split('/') : [];
  const queryMap = new Map();

  res.setHeader('Content-type', 'application/json');

  for (const [key, value] of url.searchParams.entries()) {
    if (queryMap.has(key)) {
      queryMap.get(key).push(value);
    } else {
      queryMap.set(key, [value]);
    }
  }

  const query = Object.fromEntries(queryMap);

  const response = JSON.stringify({
    parts,
    query,
  });

  res.end(response);
});

server.listen(PORT, () => {
  console.log('Server started! 🚀');
});
