/* eslint-disable no-console */
'use strict';

const PORT = process.env.PORT || 3000;

const http = require('http');

const server = http.createServer((req, res) => {
  const normalizedURL = new URL(req.url, `http://${req.headers.host}`);
  const data = {
    parts: normalizedURL.pathname
      ? normalizedURL.pathname.split('/').slice(1)
      : [],
    query: Object.fromEntries(normalizedURL.searchParams.entries()),
  };

  res.end(JSON.stringify(data));
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
