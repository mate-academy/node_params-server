'use strict';

const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const normalizedURL = new URL(req.url, `http://${req.headers.host}`);
  const pathname = normalizedURL.pathname.split('/').filter(el => el !== '');
  const params = Object.fromEntries(normalizedURL.searchParams.entries());

  res.writeHead(200, {
    'Content-type': 'application/json',
  });

  res.end(JSON.stringify({
    parts: pathname,
    query: params,
  }));
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started on PORT: ${PORT}`);
});
