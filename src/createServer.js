/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  /* Write your code here */
  // Return instance of http.Server class

  const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const requestedPath = url.pathname.slice(1);

    const parts = requestedPath.split('/').filter(Boolean);
    const query = Object.fromEntries(url.searchParams.entries());

    const result = {
      parts: parts,
      query: query,
    };

    if (req.method === 'GET') {
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 200;
      res.statusMessage = 'OK';
      res.end(JSON.stringify(result));
    }
  });

  return server;
}

module.exports = {
  createServer,
};

/*
URL {
  href: 'http://localhost:3000/api/data?id=10',
  origin: 'http://localhost:3000',
  protocol: 'http:',
  username: '',
  password: '',
  host: 'localhost:3000',
  hostname: 'localhost',
  port: '3000',
  pathname: '/api/data',
  search: '?id=10',
  searchParams: URLSearchParams { 'id' => '10' },
  hash: ''
}
*/
