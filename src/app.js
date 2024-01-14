'use strict';

const http = require('http');

const PORT = process.env.PORT || 3006;
const server = http.createServer((req, res) => {
  res.setHeader('Content-type', 'application/json');
  res.statusCode = 200;

  const normalizedUrl = new URL(req.url, `http://localhost:${PORT}`);
  const parts = normalizedUrl.pathname.split('/').slice(1);
  const query = Object.fromEntries(normalizedUrl.searchParams.entries());

  res.end(
    JSON.stringify({
      parts,
      query,
    })
  );
});

server.listen(PORT);
