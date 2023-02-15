'use strict';

const http = require('http');

const PORT = 80;

const server = http.createServer((request, response) => {
  response.setHeader('Content-Type', 'application/json');

  try {
    const normalizeURL = new URL(request.url, `http://${request.headers.host}`);
    const parts = normalizeURL.pathname.slice(1).split('/');
    const query = Object.fromEntries(normalizeURL.searchParams.entries());
    const result = {
      parts,
      query,
    };

    response.end(JSON.stringify(result));
  } catch (error) {
    response.statusCode = 400;
    response.end('Smt went wrong');
  }
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = { server };
