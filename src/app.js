/* eslint-disable no-console */
'use strict';

const http = require('http');
const { getQuery } = require('./getQuery');

const PORT = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
  response.setHeader('Content-Type', 'application/json');

  const normalizedUrl = new URL(
    request.url,
    `http://${request.headers.host}`
  );

  const parts = normalizedUrl.pathname.split('/').filter((part) => part !== '');

  const query = getQuery(normalizedUrl.searchParams);

  const responseData = {
    parts,
    query,
  };

  response.end(JSON.stringify(responseData));
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
