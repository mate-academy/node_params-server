/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    const fullUrl = `http://${req.headers.host}${req.url}`;
    const givenUrl = new URL(fullUrl);

    if (givenUrl.pathname.includes('//')) {
      givenUrl.pathname = givenUrl.pathname.replaceAll('//', '/');
    }

    const response = { parts: [], query: {} };

    // Remove leading slash only if pathname is not just '/'
    const path = givenUrl.pathname === '/' ? '' : givenUrl.pathname.slice(1);
    response.parts.push(...path.split('/'));

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
