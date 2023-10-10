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

function createServer() {
  const server = http.createServer((req, res) => {
    const [parts, query] = req.url.slice(1).split('?');
    const params = new URLSearchParams(query);

    const successResponse = {
      parts: parts.split('/'),
      query: Object.fromEntries(params.entries()),
    };

    res.statusCode = 200;
    res.statusMessage = 'OK';
    res.end(JSON.stringify(successResponse));
  });

  return server;
}

module.exports = { createServer };
