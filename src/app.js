/* eslint-disable no-console */
'use strict';

const http = require('http');

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, resp) => {
  resp.setHeader('Content-Type', 'application/json');

  const url = new URL(req.url, `http://${req.headers.host}`);
  const parts = url.pathname.slice(1).split('/').filter(part => part !== '');
  const query = Object.fromEntries(url.searchParams.entries());

  const respData = {
    parts,
    query,
  };

  resp.end(JSON.stringify(respData));
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
