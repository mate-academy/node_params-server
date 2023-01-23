'use strict';

const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  const {
    pathname, searchParams,
  } = new URL(req.url, `http://${req.headers.host}`);

  const parts = pathname.split('/').filter(i => i);
  const query = Object.fromEntries(searchParams.entries());

  const data = {
    parts, query,
  };

  res.end(JSON.stringify(data));
});

server.listen(PORT, () => {});
