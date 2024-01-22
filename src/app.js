'use strict';

const http = require('http');

const server = http.createServer((req, res) => {
  const normalizedUrl = new URL(req.url, `http://${req.headers.host}`);

  const parts = normalizedUrl.pathname.split('/').slice(1);
  const query = Object.fromEntries(normalizedUrl.searchParams.entries());

  res.end(JSON.stringify({
    parts,
    query,
  }));
});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  /* eslint-disable-next-line no-console */
  console.log(`Server is running on http://localhost:${PORT}`);
});
