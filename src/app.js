'use strict';

const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url.split('?');
  const [parts, query] = url;
  const params = new URLSearchParams(query);

  const data = {
    parts: parts.slice(1).split('/'),
    query: Object.fromEntries(params),
  };

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
});

server.listen(3300, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${3300}`);
});
