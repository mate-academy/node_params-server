/* eslint-disable no-console */
'use strict';

const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
  const normalizedUrl = new URL(request.url, `http://${request.headers.host}`);
  const parts = normalizedUrl.pathname.slice(1).split('/');
  const search = Object.fromEntries(normalizedUrl.searchParams.entries());
  const result = {
    parts,
    search,
  };

  response.end(JSON.stringify(result));
});

server.listen(PORT, () => {
  process.stdout.write(`Server is running on http://localhost:${PORT}\n`);
});
