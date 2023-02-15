'use strict';

const http = require('http');

const PORT = 80;

const server = http.createServer((request, response) => {
  response.setHeader('Content-Type', 'application/json');

  const normalizeURL = new URL(request.url, `http://${request.headers.host}`);

  const parts = normalizeURL.pathname.slice(1).split('/');

  const result = {
    parts,
    query: {},
  };

  const search = normalizeURL.search.slice(1);

  search.split('&').forEach(query => {
    const [key, value] = query.split('=');

    result.query[key] = value;
  });

  response.end(JSON.stringify(result));
});

server.listen(PORT);

module.exports = { server };
