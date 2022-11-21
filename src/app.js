'use strict';

const http = require('http');

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  const {
    pathname,
    searchParams,
  } = new URL(req.url, `http://${req.headers.host}`);
  const parts = pathname.slice(1).split('/');
  const query = Object.fromEntries(searchParams.entries());

  res.setHeader('Content-Type', 'application/json');

  res.end(JSON.stringify({
    parts,
    query,
  }));
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${PORT}`);
});
