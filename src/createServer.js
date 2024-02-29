/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  /* Write your code here */
  // Return instance of http.Server class

  return http.createServer((req, res) => {
    const [pathname, searchParams] = req.url.split('?');

    const parts = pathname.split('/').filter(p => p !== '');

    let query = {};

    if (searchParams) {
      const params = new URLSearchParams(searchParams).entries();

      query = Object.fromEntries(params);
    }

    res.setHeader('Content-type', 'application/json');
    res.statusCode = 200;

    res.end(JSON.stringify({
      parts,
      query,
    }));
  });
}

module.exports = {
  createServer,
};
