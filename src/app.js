/* eslint-disable max-len */
/* eslint-disable no-console */
'use strict';

const http = require('http');
const _ = require('lodash');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const normalizedUrl = new URL(req.url, `http://${req.headers.host}`);
  const parts = normalizedUrl.pathname.split('/').filter((part) => part !== '');
  const query = Object.fromEntries(normalizedUrl.searchParams.entries());

  if (_.isEmpty(parts) || _.isEmpty(query)) {
    res.writeHead(404, { 'Content-Type': 'application/json' });

    return res.end(JSON.stringify({
      message: 'Wrong request! Correct request is: "/<hello/world/123>?<x=1&search=some>".',
    }));
  }

  res.writeHead(200, { 'Content-Type': 'application/json' });

  return res.end(JSON.stringify({
    parts,
    query,
  }));
});

server.listen(port, () => {
  console.log('server is runing');
});
