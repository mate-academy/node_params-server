'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    const [path, queryString] = req.url.split('?');

    const parts = path
      .slice(1)
      .split('/')
      .filter((p) => p.length > 0);

    const query = {};

    if (queryString) {
      const params = new URLSearchParams(queryString);

      for (const [key, value] of params.entries()) {
        query[key] = value;
      }
    }

    try {
      res.statusCode = 200;
      res.statusMessage = 'OK';

      res.end(
        JSON.stringify({
          parts,
          query,
        }),
      );
    } catch (error) {
      res.statusCode = 400;
      res.statusMessage = 'Bad Request';

      res.end(
        JSON.stringify({
          errors: [{ message: 'Bad Request' }],
        }),
      );
    }
  });
}

module.exports = {
  createServer,
};
