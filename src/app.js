'use strict';

const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  const url = new URL(req.url, `http://${req.headers.host}`);
  const parts = url.pathname.slice(1).split('/');
  const query = Object.fromEntries(url.searchParams.entries());
  const resData = {
    parts,
    query,
  };

  res.end(JSON.stringify(resData));
});

server.listen(PORT);
