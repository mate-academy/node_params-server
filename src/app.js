'use strict';

const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const parts = url.pathname.slice(1).split('/');
  const query = Object.fromEntries(url.searchParams.entries());

  const serverResponse = {
    parts,
    query,
  };

  res.setHeader('Content-type', 'application/json');

  res.end(JSON.stringify(serverResponse));
});

server.listen(PORT);
