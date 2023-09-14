/* eslint-disable no-console */
'use strict';

const http = require('http');
const PORT = 8080;

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = url.pathname.replace('/', '');
  const parts = pathname ? pathname.split('/') : [];
  const searchParams = Object.fromEntries(url.searchParams.entries());

  res.setHeader('Content-type', 'application/json');

  if (!parts.length && !isEmpty(searchParams)) {
    res.end(JSON.stringify({
      query: searchParams,
    }));

    return;
  }

  if (isEmpty(searchParams)) {
    res.end(JSON.stringify({
      parts,
    }));

    return;
  }

  const response = JSON.stringify({
    parts,
    query: searchParams,
  });

  res.end(response);
});

server.listen(PORT, () => {
  console.log('Server started! 🚀');
});
