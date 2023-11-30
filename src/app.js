'use strict';

const http = require('http');

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(`http://localhost:${PORT}${req.url}`);

  const parts = parsedUrl.pathname.split('/').filter(part => part !== '');
  const params = parsedUrl.searchParams;

  const query = {};

  for (const [key, value] of params.entries()) {
    query[key] = value;
  };

  const jsonResponse = {
    parts,
    query,
  };

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(jsonResponse));
});

const PORT = 3000;

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${PORT}`);
});
