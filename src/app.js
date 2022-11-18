'use strict';

const http = require('http');
const { getUrlComponents } = require('./getUrlComponents');

const PORT = process.env.PORT || '8080';

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  const { parts, query } = getUrlComponents(req);
  const response = {};

  if ((parts[0]) !== '') {
    response.parts = parts;
  }

  if (Object.keys(query).length) {
    response.query = query;
  }

  res.end(JSON.stringify(response));
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server is running on: http://localhost:${PORT}`);
});
