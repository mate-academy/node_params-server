/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    try {
      const reqUrl = new URL(`http://${req.headers.host}${req.url}`);

      const parts = reqUrl.pathname.split('/').filter((part) => part !== '');

      const query = {};

      reqUrl.searchParams.forEach((value, key) => {
        query[key] = value;
      });

      const response = {
        parts: parts.length > 0 ? parts : [''],
        query: query,
      };

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(response));
    } catch (error) {
      console.error('Error processing request:', error.message);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Internal Server Error' }));
    }
  });
}

module.exports = {
  createServer,
};
