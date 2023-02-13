'use strict';

const http = require('http');
const { getParams } = require('./getParams');

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  const normalizeURL = new URL(req.url, `http://${req.headers.host}`);

  const result = {
    parts: normalizeURL.pathname.slice(1).split('/'),
    query: getParams(normalizeURL.searchParams),
  };

  res.end(JSON.stringify(result));
});

server.listen(PORT, (err) => {
  if (!err) {
    // eslint-disable-next-line no-console
    console.log(`server run on http://localhost:${PORT}`);
  }
});
