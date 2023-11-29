'use strict';

const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-type', 'application/json');

  const { url } = req;
  const [partsString, paramsQuery] = url.split('?');
  const parts = partsString
    ? partsString.slice(1).split('/')
    : [];
  const params = paramsQuery
    ? paramsQuery.split('&')
    : [];
  const query = {};

  for (const param of params) {
    const [key, value] = param.split('=');

    query[key] = value;
  }

  const response = {
    parts,
    query,
  };

  res.end(JSON.stringify(response));
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Server is running');
});
