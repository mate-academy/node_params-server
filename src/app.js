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
function sum(a, b) {
  // write code here
  return a + b;
}

const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.URL(req.url, true);

  const parts = parsedUrl.pathname.split('/').filter(part => part !== '');
  const query = parsedUrl.query;
  const jsonResponse = {
    parts,
    query,
  };

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(jsonResponse));
});

const PORT = 3000;

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = sum;
