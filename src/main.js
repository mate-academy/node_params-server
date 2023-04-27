'use strict';

const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-type', 'application/json');

  const paramsSplitted = req.url.slice(1).split('?');
  const paths = paramsSplitted[0].split('/');
  const params = new URLSearchParams(paramsSplitted[1]);
  const errors = [];
  const query = Object.fromEntries(new URLSearchParams(params));

  if (errors.length) {
    res.statusCode = 400;
    res.statusMessage = 'Bad request';
    res.end(JSON.stringify({ errors }));

    return;
  }

  const result = {
    parts: paths,
    query,
  };

  res.end(JSON.stringify(result));
});

server.listen(8080);

module.exports = { server };
