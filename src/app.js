/* eslint-disable no-console */
'use strict';

const http = require('http');

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  const ObjectToReturn = {
    parts: [],
    query: {},
  };
  const { url } = req;
  const { host } = req.headers;
  const normalizedUrl = new URL(url, `http://${host}`);

  const { pathname } = normalizedUrl;
  const parts = pathname.split('/').slice(1);

  ObjectToReturn.parts = [...parts];

  normalizedUrl.searchParams.forEach((value, key) => {
    ObjectToReturn.query[key] = value;
  });

  const response = JSON.stringify(ObjectToReturn);

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(response);
});

server.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
