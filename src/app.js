/* eslint-disable no-console */
'use strict';

const http = require('http');

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  const wholeUrl = new URL(req.url, `http://${req.headers.host}`);

  const parts = wholeUrl.pathname.split('/').slice(1);

  const query = Object.fromEntries(wholeUrl.searchParams.entries());

  const result = {
    parts,
    query,
  };

  // console.log(JSON.stringify(post));

  res.end(JSON.stringify(result));
});

server.listen(PORT, () => {
  console.log(`Server created http://localhost:${PORT}`);
});
