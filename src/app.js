/* eslint-disable no-console */
'use strict';

const http = require('http');

const PORT = 4040;

const server = http.createServer((request, response) => {
  response.setHeader('Contet-Type', 'applocation/json');

  const url = new URL(request.url, `http://${request.headers.host}`);
  const parts = url.pathname.split('/').slice(1);
  const query = Object.fromEntries(url.searchParams.entries());

  response.end(JSON.stringify({
    parts,
    query,
  }));
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
