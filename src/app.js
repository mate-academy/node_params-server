'use strict';

const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const {
    pathname, searchParams,
  } = new URL(req.url, `http://${req.headers.host}`);
  const pathName = pathname.split('/').slice(1);
  const params = Object.fromEntries(searchParams.entries());

  const response = {
    parts: pathName,
    query: params,
  };

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(response));
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${PORT}`);
});
