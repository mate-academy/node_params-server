/* eslint-disable no-console */
'use strict';

const http = require('http');

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  const normalizedURl = new URL(req.url, `http://${req.headers.host}`);

  const query = Object.fromEntries(normalizedURl.searchParams.entries());

  const parts = normalizedURl.pathname.slice(1).split('/');

  const response = {
    parts,
    query,
  };

  res.end(JSON.stringify(response));
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
