'use strict';

const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  const baseUrl = req.url.slice(1);
  const parts = baseUrl.split('?')[0].split('/');
  const queryString = baseUrl.split('?')[1];
  const params = new URLSearchParams(queryString);
  const query = {};

  for (const [key, value] of params) {
    query[key] = value;
  }

  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;

  res.end(JSON.stringify({ parts, query }));
});

server.listen(PORT);
