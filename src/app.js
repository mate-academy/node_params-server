'use strict';

const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  const parts = url.pathname
    .slice(1)
    .split('/');

  const query = Object.fromEntries(url.searchParams.entries());

  res.end(JSON.stringify({
    parts,
    query,
  }));
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server is running on http://localhost:${PORT}`);
});
