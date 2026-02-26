/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    // 1. Завжди відповідаємо JSON
    res.setHeader('Content-Type', 'application/json');

    // 2. Розбираємо URL
    const [pathWithText, queryString] = req.url.split('?');

    const textArr = pathWithText.split('/').filter((el) => el.length > 0);

    const params = new URLSearchParams(queryString);

    const objParams = Object.fromEntries(params);

    try {
      const responseBody = {
        parts: textArr,
        query: objParams,
      };

      res.statusCode = 200;
      res.statusMessage = 'OK';
      res.end(JSON.stringify(responseBody));
    } catch (err) {
      console.error('Business logic error:', err.message);

      res.statusCode = 500; // Internal Server Error

      res.end(
        JSON.stringify({
          errors: [{ message: 'Internal server error occurred.' }],
        }),
      );
    }
  });

  return server;
}

module.exports = {
  createServer,
};
