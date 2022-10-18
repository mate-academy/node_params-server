'use strict';
/* eslint-disable no-console */

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
// function sum(a, b) {
//   // write code here
//   return a + b;
// }

// module.exports = sum;

const http = require('http');

const PORT = process.env.PORT || 8080;

const obj = {};

const server = http.createServer((req, res) => {
  const normalizeURL = new URL(req.url, `http://${req.headers.host}`);

  const params = Object.fromEntries(normalizeURL.searchParams.entries());

  obj.parts = normalizeURL.pathname.split('/');
  obj.query = params;
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
