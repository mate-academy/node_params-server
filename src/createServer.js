/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  /* Write your code here */
  // Return instance of http.Server class

  return http.createServer((req, res) => {
    res.setHeader('Content-type', 'application/json');

    const url = new URL(req.url, 'http://localhost');

    const parts = url.pathname.split('/').filter((el) => el !== '');
    const query = Object.fromEntries(url.searchParams);

    res.end(
      JSON.stringify({
        parts: parts,
        query: query,
      }),
    );
  });
}

module.exports = {
  createServer,
};
