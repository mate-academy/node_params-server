'use strict';

const http = require('http');
const PORT = 5700;

const server = http.createServer((req, res) => {
  const fullUrl = new URL(req.url, `http:/${req.headers.host}`);
  const pathName = fullUrl.pathname.slice(1).split('/');
  const searchParams = Object.fromEntries(fullUrl.searchParams.entries());

  const resultObj = {
    'parts': pathName,
    'query': searchParams,
  };

  res.end(`${JSON.stringify(resultObj)}`);
});

server.listen(PORT, () => {
  process.stdout.write(`http:/loacalhost:${PORT}`);
});
