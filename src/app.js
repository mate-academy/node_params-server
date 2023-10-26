'use strict';

const http = require('http');

const server = http.createServer((request, response) => {
  const result = {};
  const normalizedUrl = new URL(
    request.url,
    `http://${request.headers.host}`
  );

  result.paths = normalizedUrl.pathname.split('/').slice(1);
  result.query = Object.fromEntries(normalizedUrl.searchParams.entries());
  
  response.end();
});

server.listen(3000);

