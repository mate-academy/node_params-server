/* eslint-disable no-console */
'use strict';

const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
  const normalizeUrl = new URL(request.url, `http://${request.headers.host}`);
  const parts = normalizeUrl.pathname.split('/').filter((part) => part !== '');
  const query = Object.fromEntries(normalizeUrl.searchParams.entries());

  const res = {
    parts, query,
  };

  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify(res));
});

server.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
