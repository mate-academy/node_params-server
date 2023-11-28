'use strict';

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });

  const normalizedURL = new URL(req.url, `http://${req.headers.host}`);
  const path = new URL(req.url, `http://${req.headers.host}`).pathname.slice(1);
  const parts = path.split('/');
  const query = normalizedURL.search.slice(1);
  const queryArrayPairs = query.split('&');
  const queryObject = {};

  for (const pair of queryArrayPairs) {
    const pairArray = pair.split('=');
    const key = pairArray[0];
    const value = pairArray[1];
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
