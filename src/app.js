'use strict';

const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
  const normalizeURL = new URL(req.url, `http://${req.headers.host}`);

  const parts = normalizeURL.pathname.slice(1).split('/');
  const query = Object.fromEntries(normalizeURL.searchParams.entries());

  res.setHeader('Content-Type', 'application/json');

  res.end(JSON.stringify({
    parts,
    query,
  }));
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Server started! 🚀');
});
