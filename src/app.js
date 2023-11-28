'use strict';

const http = require('http');
const PORT = 5500;

const createServer = () => {
  const server = http.createServer((req, res) => {
    const normalizedUrl = new URL(req.url, 'http://localhost:5070');
    const parts = normalizedUrl.pathname.split('/').filter(part => part !== '');
    const query = {};

    for (const [key, value] of normalizedUrl.searchParams.entries()) {
      query[key] = value;
    }

    const responseJson = {
      parts,
      query,
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(responseJson));
  });

  return server;
};

createServer().listen(PORT);
