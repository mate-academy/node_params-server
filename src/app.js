/* eslint-disable no-console */
'use strict';

const http = require('http');
const PORT = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  const normaluzedURL = new URL(req.url, `http://localhost:${PORT}`);
  const query = Object.fromEntries(normaluzedURL.searchParams.entries());
  const parts = normaluzedURL.pathname.slice(1).split('/');

  res.end(JSON.stringify(
    {
      parts,
      query,
    }
  ));
});

server.listen(PORT, () => {
  console.log('Server started! 🚀');
});
