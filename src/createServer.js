'use strict';

const http = require('http');

const PORT = process.env.port || 3000;

const server = http.createServer((res, req) => {
  const normalizedUrl = new URL(req.url, `http://${res.headers.host}`);
  const parts = normalizedUrl.split('/').filter(Boolean);
  const query = Object.fromEntries(normalizedUrl.searchParams.entries());

  res.end(
    JSON.stringify({
      parts,
      query,
    })
  );
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
