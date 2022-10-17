/* eslint-disable no-console */
'use strict';

const http = require('http');

const PORT = process.env.PORT || 8080;

const dataObj = {};

const server = http.createServer((req, res) => {
  const normalizeURL = new URL(req.url, `http://${req.headers.host}`);

  const params = Object.fromEntries(normalizeURL.searchParams.entries());

  dataObj.parts = normalizeURL.pathname.split('/');
  dataObj.query = params;
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
