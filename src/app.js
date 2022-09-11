'use strict';

/* eslint-disable no-console */
const http = require('http');
const PORT = 8080;

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const parts = url.pathname.slice(1).split('/');
  const query = Object.fromEntries(url.searchParams.entries());

  res.end(console.log(JSON.stringify({
    parts, query,
  })));
});

server.listen(PORT, () => {
  console.log(`Server running at port http://localhost:${PORT}`);
});
