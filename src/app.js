/* eslint-disable no-console */
'use strict';

const http = require('http');

const PORT = process.env.PORT || 8080;

const server = http.createServer((request, response) => {
  const normalizedURL = new URL(request.url, `http://${request.headers.host}`);
  const urlInfo = {
    parts: normalizedURL.pathname.slice(1).split('/'),
    query: Object.fromEntries(normalizedURL.searchParams.entries()),
  };

  response.end(JSON.stringify(urlInfo));
});

server.listen(PORT, () => {
  console.log(`Server is starting on http://localhost:${PORT}`);
});
