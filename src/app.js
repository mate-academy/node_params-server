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
  const normalizedUrl = new URL(req.url, `http://${req.headers.host}`);

  const partsArray = normalizedUrl.pathname.split('/').slice(1);
  const params = Object.fromEntries(normalizedUrl.searchParams);

  res.end(JSON.stringify({
    parts: partsArray,
    query: params,
  }));
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`The server is listening on port ${PORT}`);
});
