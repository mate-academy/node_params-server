/* eslint-disable no-console */
'use strict';

const http = require('http');

const server = http.createServer((req, res) => {
  const normURL = new URL(req.url, `http://${req.headers.host}`);
  const answer = {};

  answer.parts = normURL.pathname.slice(1).split('/');
  answer.query = Object.fromEntries(normURL.searchParams.entries());

  res.end(JSON.stringify(answer));
});

server.listen(8080, () => console.log('server started'));
