'use strict';

const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-type', 'application/json');

  res.statusCode = 200;
  res.statusMessage = 'OK';

  const normalizedUrl = new URL(req.url, `http://localhost:${PORT}`);

  const parts = normalizedUrl.pathname.split('/').slice(1);

  const query = {};

  for (const [key, value] of normalizedUrl.searchParams.entries()) {
    query[key] = value;
  }

  res.end(JSON.stringify({
    parts,
    query,
  }));
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${PORT}`);
});
