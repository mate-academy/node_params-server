'use strict';

const http = require('http');

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  const normilizedURL = new URL(req.url, `http://${req.headers.host}`);
  const parts = normilizedURL.pathname.slice(1).split('/');
  const query = Object.fromEntries(normilizedURL.searchParams.entries());

  res.setHeader('content-type', 'application.json');

  res.end(JSON.stringify({
    parts,
    query,
  }));
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${PORT}`);
});
