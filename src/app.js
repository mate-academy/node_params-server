'use strict';

const http = require('http');

const createServer = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.statusCode = 200;

  const PORT = process.argv.PORT || 8080;

  const myURL = new URL(req.url, `http://localhost:${PORT}`);
  const parts = myURL.pathname.split('/').slice(1);
  const query = {};

  for (const [key, value] of myURL.searchParams.entries()) {
    query[key] = value;
  }

  const response = {
    parts,
    query,
  };

  res.end(JSON.stringify(response));
});

createServer.listen(8080, () => {
  // eslint-disable-next-line no-console
  console.log('Server is running');
});
