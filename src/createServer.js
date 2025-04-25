/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    const fullUrl = `http://${req.headers.host}${req.url}`;
    const givenUrl = new URL(fullUrl);

    console.log(givenUrl);

    if (givenUrl.pathname.includes('//')) {
      givenUrl.pathname = givenUrl.pathname.replaceAll('//', '/');
    }

    const response = { parts: [], query: {} };

    response.parts.push(...givenUrl.pathname.slice(1).split('/'));

    const normalizedParams = Object.fromEntries(
      givenUrl.searchParams.entries(),
    );

    for (const [key, value] of Object.entries(normalizedParams)) {
      response.query[key] = value;
    }

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
  });

  return server;
}

module.exports = {
  createServer,
};
