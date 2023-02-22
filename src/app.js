/* eslint-disable no-console */
'use strict';

const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  const url = new URL(req.url, `http://${req.headers.host}`);
  const parts = url.pathname.slice(1).split('/');
  const query = Object.fromEntries(url.searchParams.entries());

  const responseData = {
    parts,
    query,
  };

  res.end(JSON.stringify(responseData));
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
