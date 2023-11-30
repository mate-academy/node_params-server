'use strict';

const http = require('http');

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
const server = http.createServer((req, res) => {
  const result = {
    parts: [],
    query: {},
  };

  const [urlParts, urlQueries] = req.url.slice(1).split('?');

  urlParts.split('/').forEach(part => result.parts.push(part));

  urlQueries.split('&').forEach((expression) => {
    const query = expression.split('=');

    result.query[query[0]] = query[1];
  });

  res.end(JSON.stringify(result, null, 2));
});

module.exports = server;
