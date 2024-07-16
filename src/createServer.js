/* eslint-disable no-console */
'use strict';

function createServer() {
  /* Write your code here */
  // Return instance of http.Server class
  const http = require('http');

  return http.createServer((req, res) => {
    const reqUrlData = req.url.split('?');
    const reqUrl = reqUrlData[0];

    const parts = reqUrl
      .split('/')
      .filter((part) => part !== '/' && part !== '');

    const params = new URLSearchParams(reqUrlData[1]);

    const query = {};

    for (const [key, value] of params) {
      query[key] = value;
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ parts, query }));
  });
}

module.exports = {
  createServer,
};
