/* eslint-disable no-console */
'use strict';

const http = require('node:http');

const createServer = () => {
  const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    const { pathname, searchParams } = new URL(`http://localhost${req.url}`);

    const parts = pathname.split('/').filter(Boolean);
    const query = Object.fromEntries(searchParams);

    res.statusCode = 200;

    res.end(
      JSON.stringify({
        parts,
        query,
      }),
    );
  });

  return server;
};

module.exports = {
  createServer,
};
