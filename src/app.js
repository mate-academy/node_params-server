/* eslint-disable no-console */
'use strict';

const http = require('http');

const PORT = process.env.PORT || 3003;

const server = http.createServer((req, res) => {
  if (req.url === '/favicon.ico') {
    res.writeHead(204, { 'Content-Type': 'image/x-icon' });
    res.end();

    return;
  }

  const [rawParts, rawQueries] = req.url.split('?');

  const parts = rawParts.slice(1) ? rawParts.split('/').slice(1) : [];
  const query = rawQueries
    ? (rawQueries.split('&').reduce((queries, pair) => {
      const [key, value] = pair.split('=');

      queries[key] = value;

      return queries;
    }, {}))
    : [];

  const response = {
    parts,
    query,
  };

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(response, null, 2));
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
