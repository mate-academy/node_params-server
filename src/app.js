'use strict';

const http = require('http');

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;

  const url = new URL(req.url, `http://${req.headers.host}`);

  const parts = url.pathname.slice(1).split('/');

  const query = {};

  url.searchParams.forEach((value, name) => {
    query[name] = value;
  });

  res.end(JSON.stringify({
    parts, query,
  }));
});

server.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`Server is running on http://localhost:${PORT}`);
});
