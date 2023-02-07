'use strict';

const http = require('http');

const server = http.createServer((req, res) => {
  const normalizedUrl = new URL(req.url, `http://${req.headers.host}`);
  const query = Object.fromEntries(normalizedUrl.searchParams.entries());
  const parts = normalizedUrl.pathname.split('/').splice(1);

  res.end(JSON.stringify({
    parts,
    query,
  }));
});

server.listen(8080);
