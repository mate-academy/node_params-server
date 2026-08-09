/* eslint-disable no-console */
'use strict';

const http = require('node:http');

const createServer = () => http.createServer((req, res) => {
  const urlObj = new URL(req.url, `http://${req.headers.host}`);
  const parts = urlObj.pathname.split('/').filter(Boolean);

  res.setHeader('Content-Type', 'application/json');

  res.end(JSON.stringify({ parts, query: Object.fromEntries(urlObj.searchParams) }));
});

module.exports = { createServer };
