/* eslint-disable no-console */
'use strict';

const http = require('node:http');

function createServer() {
  /* Write your code here */
  // Return instance of http.Server class
  return http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    const parsedUrl = new URL(req.url, 'http://localhost');

    const parts = parsedUrl.pathname.split('/').filter(Boolean);
    const query = Object.fromEntries(parsedUrl.searchParams);

    res.statusCode = 200;
    res.statusMessage = 'OK';

    res.end(
      JSON.stringify({
        parts,
        query,
      }),
    );
  });
}

module.exports = {
  createServer,
};
