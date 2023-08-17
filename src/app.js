'use strict';

const http = require('http');

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.getHeader('Content-Type', 'application.json');

  const normalizedURL = new URL(req.url, `http://${req.headers.host}`);
  const parts = normalizedURL.pathname
    .split('/')
    .slice(1)
    .filter(part => part !== '');
  const query = Object.fromEntries(normalizedURL.searchParams.entries());

  res.statusCode = 200;
  res.statusMessage = 'OK';

  res.end(JSON.stringify({
    parts,
    query,
  }));
});

server.listen(PORT, () =>
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${PORT}`)
);
