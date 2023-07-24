'use strict';

const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
  const readUrl = new URL(`http://${req.headers.host + req.url}`);
  const queryParams = querystring.parse(readUrl.search.slice(1));

  const dataToSend = JSON.stringify({
    parts: readUrl.pathname.slice(1).split('/'),
    query: queryParams,
  });

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(dataToSend);
});

server.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is running');
});
