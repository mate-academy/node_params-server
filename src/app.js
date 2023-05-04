'use strict';

const http = require('http');

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  // eslint-disable-next-line no-console

  const { url } = req;
  const [text, queryString] = url.substring(1).split('?');
  const params = new URLSearchParams(queryString);

  res.setHeader('Content-Type', 'application/json');

  res.end(JSON.stringify({
    parts: text.split('/'),
    query: Object.fromEntries(params.entries()),
  }));
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${PORT}`);
});

http.get(`http://localhost:${PORT}/hello/world/123?x=1&search=some`);
