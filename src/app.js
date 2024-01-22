'use strict';

const http = require('http');

const PORT = 3000;
const BASE_URL = `http://localhost:${PORT}`;

const server = http.createServer((req, res) => {
  const url = new URL(req.url, BASE_URL);

  const pathnameParts = url.pathname.split('/').filter(part => part !== '');
  const queries = Object.fromEntries(url.searchParams.entries());

  const response = {
    parts: pathnameParts,
    query: queries,
  };

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(response));
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${PORT}`);
});
