'use strict';

const axios = require('axios');
const http = require('http');

const PORT = process.env.PORT || 8080;
const server = http.createServer((req, res) => {
  const normalizedURL = new URL(req.url, `http://${req.headers.host}`);

  res.end(JSON.stringify({
    parts: normalizedURL.pathname.slice(1).split('/'),
    query: Object.fromEntries(normalizedURL.searchParams.entries()),
  }));
});

server.listen(PORT);

axios.get('http://localhost:8080/hello/world/123?x=1&search=some');
