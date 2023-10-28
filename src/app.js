'use strict';

const http = require('http');

const PORT = process.env.PORT || 3006;

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `https://${req.headers.host}`);

  const parts = url.pathname.slice(1).split('/');
  const query = Object.fromEntries(
    url.searchParams.entries()
  );

  res.statusCode = 200;
  res.statusMessage = 'OK';

  res.end(JSON.stringify({
    parts: parts,
    query: query,
  }));
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${PORT}`);
});
