/* eslint-disable no-console */
'use strict';

const http = require('node:http');

function createServer() {
  const server = http.createServer((req, res) => {
    const sanitizedUrl = new URL(req.url, `http://${req.headers.host}`);
    const urlParts = sanitizedUrl.pathname
      .replace(/\/+/g, '/')
      .split('/')
      .filter(Boolean);

    const { searchParams } = sanitizedUrl;
    const searchParamsKeys = sanitizedUrl.searchParams.keys();
    const searchParamsResult = [...searchParamsKeys].reduce(
      (acc, current) => ({
        ...acc,
        [current]: searchParams.get(current),
      }),
      {},
    );

    res.statusCode = 200;
    res.statusMessage = 'OK';
    res.setHeader('Content-Type', 'application/json');

    res.end(
      JSON.stringify({
        parts: urlParts,
        query: searchParamsResult,
      }),
    );
  });

  return server;
}

module.exports = {
  createServer,
};
