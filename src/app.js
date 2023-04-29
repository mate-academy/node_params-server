'use strict';

const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const normilezedURL = new URL(req.url, `http://${req.headers.host}`);
  const pathname = normilezedURL.pathname.split('/').filter(el => el !== '');
  const params = Object.fromEntries(normilezedURL.searchParams.entries());

  res.end(JSON.stringify({
    parts: pathname,
    query: params,
  }));
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server Start');
});
