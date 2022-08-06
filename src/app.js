'use strict';

const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const paths = url.pathname.slice(1).split('/');
  const queries = Object.fromEntries(url.searchParams.entries());

  res.end(JSON.stringify({
    paths, queries,
  }));
});

server.listen(PORT, () => {
  process.stdout.write(`Server running at port http://localhost:${PORT}`);
});
