'use strict';

const http = require('http');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const parts = url.pathname
    .slice(1)
    .split('/')
    .filter(part => part);
  const query = Object.fromEntries(url.searchParams.entries());

  res.setHeader('Content-Type', 'application/json;charset=UTF-8');

  res.end(JSON.stringify({
    parts,
    query,
  }));
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${PORT}`);
});
