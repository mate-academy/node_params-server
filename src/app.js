/* eslint-disable no-console */
'use strict';

const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = new url.URL(req.url, `http://${req.headers.host}`);
  const parts = parsedUrl.pathname
    .split('/')
    .filter(part => part !== '');

  const query = Object.fromEntries(parsedUrl.searchParams.entries());

  const responseJson = {
    parts,
    query,
  };

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(responseJson));
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
