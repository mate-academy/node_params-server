/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    const newUrl = new URL(`http://localhost${req.url}`);

    const pathnameParts = newUrl.pathname
      .split('/')
      .filter((part) => part !== '');

    const queryParams = {};

    for (const [key, value] of newUrl.searchParams.entries()) {
      queryParams[key] = value;
    }

    res.setHeader('Content-Type', 'application/json');

    res.end(
      JSON.stringify({
        parts: pathnameParts,
        query: queryParams,
      }),
    );
  });

  return server;
}

module.exports = {
  createServer,
};
