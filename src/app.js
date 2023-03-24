/* eslint-disable no-console */
'use strict';

const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
  const normalizedUrl = new URL(
    request.url,
    `http://${request.headers.host}`
  );

  const result = {
    parts: normalizedUrl.pathname
      .split('/')
      .slice(1),
    query: Object.fromEntries(
      normalizedUrl.searchParams.entries()
    ),
  };

  response.end(JSON.stringify(result));
});

server.listen(PORT, () => {
  console.log('Server is running');
});
