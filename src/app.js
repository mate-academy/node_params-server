'use strict';

const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  const normalizedURL = new URL(req.url, `http://${req.headers.host}`);

  const parts = normalizedURL.pathname.slice(1).split('/')
    .filter(part => part !== '');

  const query = Object.fromEntries(normalizedURL.searchParams.entries());

  const response = {
    parts,
    query,
  };

  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.end(JSON.stringify(response));
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = sum;
