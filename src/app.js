'use strict';

/**
 * Implement sum function:
 *
 * Function takes 2 numbers and returns their sum
 *
 * sum(1, 2) === 3
 * sum(1, 11) === 12
 *
 * @param {number} a
 * @param {number} b
 *
 * @return {number}
 */

const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;

  const normalizedURL = new URL(req.url, `http://localhost:${PORT}`);

  const parts = normalizedURL.pathname.split('/').slice(1);
  const query = Object.fromEntries(normalizedURL.searchParams.entries());

  const response = {
    parts,
    query,
  };

  res.end(JSON.stringify(response));
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${PORT}`);
});
