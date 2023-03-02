/* eslint-disable no-console */
'use strict';

const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  const normalizeUrl = new URL(req.url, `http://${req.headers.host}`);
  const parts = normalizeUrl.pathname.split('/').filter((str) => str !== '');
  const search = Object.fromEntries(normalizeUrl.searchParams.entries());

  res.end(JSON.stringify(
    {
      parts: [...parts],
      query: { ...search },
    }
  ));
});

server.listen(PORT, () => {
  console.log(`server is running: http://localhost:${PORT}`);
});
