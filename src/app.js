'use strict';
/* eslint-disable no-console */

const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const normalizedURL = new URL(req.url, `http://${req.headers.host}`);

  const urlInfo = {
    parts: normalizedURL.pathname.slice(1).split('/'),
    query: Object.fromEntries(normalizedURL.searchParams),
  };

  res.end(JSON.stringify(urlInfo));
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
