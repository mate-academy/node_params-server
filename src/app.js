'use strict';

const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-type', 'application/json');

  const normalizeURL = new URL(req.url, `http://localhost:${PORT}`);
  const parts = normalizeURL.pathname.slice(1).split('/');

  if (parts.includes('favicon.ico')) {
    res.end();
  } else {
    const search = normalizeURL.search.slice(1).split('&');
    const query = {};

    search.forEach(item => {
      const [key, value] = item.split('=');

      if (query[key]) {
        query[key] += `, ${value}`;
      } else {
        query[key] = value;
      }
    });

    res.statusCode = 200;

    res.write(JSON.stringify({
      parts,
      query,
    }));
    res.end();
  }
});

server.listen(PORT);
