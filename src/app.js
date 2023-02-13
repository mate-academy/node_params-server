'use strict';

const PORT = process.env.PORT || 3000;

const http = require('http');

const server = http.createServer((req, res) => {
  const requestUrl = new URL(req.url, `http://${req.headers.host}`);
  const parts = requestUrl.pathname.slice(1).split('/');
  const query = Object.fromEntries(requestUrl.searchParams.entries());

  const responseToUser = {
    parts,
    query,
  };

  res.setHeader('Content-type', 'application/json');

  res.end(JSON.stringify(responseToUser));
});

server.listen(PORT);
