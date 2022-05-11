/* eslint-disable no-console */
'use strict';

const http = require('http');

function createPathArray(path) {
  return path.split('/').filter(Boolean);
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  const response = {
    parts: createPathArray(url.pathname),
    query: Object.fromEntries(url.searchParams.entries()),
  };

  res.end(JSON.stringify(response));
});

server.listen(3000);
