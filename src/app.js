'use strict';

const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  const normalizedURL = new URL(req.url, `http://localhost:${PORT}`);
  const parts = normalizedURL.pathname.length > 1
    ? normalizedURL.pathname.slice(1).split('/')
    : null;
  const query = Object.fromEntries(normalizedURL.searchParams.entries());
  const resData = {};

  if (parts) {
    resData.parts = parts;
  }

  if (Object.keys(query).length) {
    resData.query = query;
  }

  if (Object.keys(resData).length) {
    res.statusCode = 200;
    res.statusText = 'OK';
    res.end(JSON.stringify(resData));
  } else {
    res.statusCode = 400;
    res.statusText = 'Bag request';
    res.end(JSON.stringify('Invalid request URL'));
  }
});

server.listen(PORT, () => {
// eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${PORT}`);
});
