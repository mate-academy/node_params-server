'use strict';

const http = require('http');

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  const normalizeUrl = new URL(req.url, `http://${req.headers.host}`);
  const parts = normalizeUrl.pathname.split('/').slice(1);
  const query = Object.fromEntries(normalizeUrl.searchParams.entries());

  for (const key in query) {
    if (normalizeUrl.searchParams.getAll(key).length > 1) {
      query[key] = normalizeUrl.searchParams.getAll(key);
    }
  }

  const resObject = {
    parts,
    query,
  };

  res.setHeader('Content-type', 'application/json');
  res.statusCode = 200;
  res.statusMessage = 'Ok';
  res.end(JSON.stringify(resObject));
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${PORT}`);
});
