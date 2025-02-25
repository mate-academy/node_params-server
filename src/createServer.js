/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  /* Write your code here */
  // Return instance of http.Server class
  const server = http.createServer((req, res) => {
    const normUrl = new URL(req.url, 'http://localhost:5700');

    console.log(normUrl);

    const payload = {
      parts: normUrl.pathname.split('/').filter((el) => el.length > 0),
      query: Object.fromEntries(normUrl.searchParams),
    };

    res.setHeader('Content-Type', 'application/json');

    res.end(JSON.stringify(payload));
  });

  return server;
}

module.exports = {
  createServer,
};
