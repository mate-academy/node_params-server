/* eslint-disable no-console */
'use strict';

const http = require('http');
const { getResObj } = require('./utils/getResObject');

const PORT = 8000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  const normalizedURL = new URL(req.url, `http://${req.headers.host}`);
  const pathname = normalizedURL.pathname;
  const searchParams = normalizedURL.searchParams;
  const searchParamsObject = Object.fromEntries(searchParams.entries());
  const resObj = getResObj(searchParamsObject, searchParams);
  const parts = pathname.split('/').filter(el => !!el);

  const result = {
    'parts': parts,
    'query': resObj,
  };

  res.end(JSON.stringify(result, null, 2));
});

server.listen(PORT, (err) => {
  if (!err) {
    console.log(`server is runnning on http://localhost:${PORT}`);
  }
});
