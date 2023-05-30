/* eslint-disable no-console */
'use strict';

const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const normolizeURL = new URL(req.url, `http://${req.headers.host}`);
  const parts = normolizeURL.pathname.split('/');
  const query = Object.fromEntries(normolizeURL.searchParams.entries());

  res.setHeader('Content-Type', 'application/json');

  res.end(JSON.stringify({
    parts,
    query,
  }));

  server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
