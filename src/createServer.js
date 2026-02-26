/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  /* Write your code here */
  // Return instance of http.Server class

  return http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    const url = req.url;
    const [path, query] = url.split('?');
    const pathParts = path.split('/').filter(Boolean);
    const queryParts = query
      ? Object.fromEntries(new URLSearchParams(query))
      : {};

    res.end(
      JSON.stringify({
        parts: pathParts,
        query: queryParts,
      }),
    );
  });
}

module.exports = {
  createServer,
};
