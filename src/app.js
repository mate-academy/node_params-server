'use strict';

const http = require('http');
const PORT = 8080;

const server = http.createServer((req, res) => {
  const fullURL = new URL(req.url, `http://${req.headers.host}`);
  const pathName = fullURL.pathname.slice(1).split('/');
  const searchParams = Object.fromEntries(fullURL.searchParams.entries());

  const resultObj = {
    'parts': pathName,
    'query': searchParams,
  };

  res.setHeader('Content-Type', 'application/json');
  res.end(`${JSON.stringify(resultObj)}`);
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on http://localhost:${PORT}`);
});
