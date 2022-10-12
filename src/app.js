'use strict';

const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
  const normalized = new URL(req.url, `http://${req.headers.host}`);

  res.setHeader('Content-Type', 'application/json;charset=UTF-8');

  const json = {};

  if (normalized.pathname) {
    json.parts = [];

    normalized.pathname
      .split('/')
      .filter(item => item)
      .map(item => json.parts.push(item));
  }

  if (normalized.searchParams) {
    const params = Object.fromEntries(normalized.searchParams.entries());

    json.query = params;
  }

  res.end(JSON.stringify(json));
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${PORT}`);
});
