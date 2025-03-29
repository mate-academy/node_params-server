/* eslint-disable max-len */
/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  /* Write your code here */
  // Return instance of http.Server class
  return http.createServer((req, res) => {
    const [pathname, queryOption] = req.url.split('?');
    const parts = pathname
      .slice(1)
      .split('/')
      .filter((part) => part !== '/' && part !== '');
    const params = new URLSearchParams(queryOption);
    const query = {};

    if (params) {
      for (const [name, value] of params) {
        query[name] = value;
      }
    }

    res.setHeader('Content-Type', 'application/json');
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
