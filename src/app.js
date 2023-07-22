'use strict';

const http = require('http');
const querystring = require('querystring');

http.createServer((req, res) => {
  const readUrl = new URL(`http://${req.headers.host + req.url}`);
  const queryParams = querystring.parse(readUrl.search.slice(1));

  const dataToSend = JSON.stringify({
    parts: readUrl.pathname.slice(1).split('/'),
    query: queryParams,
  });

  res.end(dataToSend);
});
