/* eslint-disable no-console */
'use strict';

const http = require('http');

const PORT = process.env.PORT || 3006;

const server = http.createServer((req, res) => {
  const normalizedUrl = new URL(req.url, `https://${req.headers.host}`);

  const parts = normalizedUrl.pathname.slice(1).split('/');
  const query = Object.fromEntries(
    normalizedUrl.searchParams.entries()
  );

  res.statusCode = 200;
  res.statusMessage = 'OK';

  res.end(JSON.stringify({
    parts: parts,
    query: query,
  }));
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
