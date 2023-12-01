'use strict';

const http = require('http');
const url = require('url');

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
  const PORT = 3000;
  const data = {
    parts: null,
    query: {},
  };
  const server = http.createServer((req, res) => {
    const normalizedUrl = new url.URL(req.url, `http://${req.headers.host}`);
    const path = normalizedUrl.pathname.slice(1).split('/');
    const queries = normalizedUrl.search.slice(1).split('&');

    queries.forEach(item => {
      const [key, value] = item.split('=');

      data.query[key] = value;
    });
    data.parts = path;
    res.setHeader('Content-type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify(data, null, 2));
  });

  server.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is runnig on port: http://localhost:${PORT}`);
  });

  return a + b;
}

sum(1, 2);

module.exports = sum;
