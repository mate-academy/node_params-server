'use strict';

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });

  const normalizedURL = new URL(req.url, `http//${req.headers.host}`);
  const path = new URL(req.url, `http//${req.headers.host}`).slice(1);
  const parts = path.split('/');
  const query = normalizedURL.search;
  const queryArray = query.split('=');
  const queryObject = {};

  for (let i = 0; i < queryArray.length; i + 2) {
    const key = queryArray[i];
    const value = queryArray[i + 1];
    const existingValue = queryObject[key];

    if (existingValue) {
      queryObject[key] = typeof existingValue === 'object'
        ? [...existingValue, value]
        : [existingValue, value];
    } else {
      queryObject[key] = value;
    }
  }

  res.end(JSON.stringify({
    parts,
    queryObject,
  }));
});

module.exports = server;
