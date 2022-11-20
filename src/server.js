'use strict';

const http = require('http');

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  const normalizeUrl = new URL(req.url, `http://${req.headers.host}`);

  const parts = normalizeUrl.pathname.slice(1).split('/');
  const query = Object.fromEntries(normalizeUrl.searchParams.entries());

  res.setHeader('Content-Type', 'application/json');

  res.end(JSON.stringify({
    parts,
    query,
  }));
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`running on port: ${PORT}`);
});
