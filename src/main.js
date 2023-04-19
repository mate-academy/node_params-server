'use strict';

const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-type', 'application/json');

  const paramsSplitted = req.url.slice(1).split('?');
  const paths = paramsSplitted[0].split('/');
  const params = new URLSearchParams(paramsSplitted[1]);
  const errors = [];
  const query = {};

  for (const key of params) {
    query[key[0]] = key[1];
  }

  if (!paths[0]) {
    errors.push({ message: 'Your ways are empty' });
  }

  if (!Object.keys(query).length) {
    errors.push({ message: 'Your params are empty' });
  }

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

module.exports = { server };
