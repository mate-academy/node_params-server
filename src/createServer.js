/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  /* Write your code here */
  // Return instance of http.Server class
  const server = http.createServer((req, res) => {
    const url = new URL(`http://localhost${req.url}`);

    const parts = url.pathname.split('/').filter((elem) => elem.length > 0);

    const query = Object.fromEntries(url.searchParams.entries());

    const result = {
      parts,
      query,
    };

    res.setHeader('Content-Type', 'application/json');

    res.end(JSON.stringify(result));
  });

  return server;
}

module.exports = {
  createServer,
};
