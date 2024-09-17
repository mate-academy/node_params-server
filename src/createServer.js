/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  /* Write your code here */
  // Return instance of http.Server class
  const server = http.createServer((req, res) => {
    const mainUrl = new URL(`http://localhost:${5701}${req.url}`);
    const responseUrl = mainUrl.pathname
      .split('/')
      .filter((part) => part !== '');

    try {
      if (!responseUrl || !mainUrl) {
        throw new Error('error');
      }

      const queryParam = {};

      mainUrl.searchParams.forEach((value, key) => {
        queryParam[key] = value;
      });

      const response = {
        parts: responseUrl,
        query: queryParam,
      };

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(response));
    } catch (error) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end();
    }
  });

  return server;
}

module.exports = {
  createServer,
};
