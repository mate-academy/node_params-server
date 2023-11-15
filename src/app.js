'use strict';

const http = require('http');
const { urlParser } = require('./utils/urlParser');

const POPT = 3001;

const server = http.createServer((req, res) => {
  const result = urlParser(req);

  res.setHeader('Content-Type', 'application/json');

  res.statusCode = 200;

  res.end(JSON.stringify(result));
});

server.listen(POPT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started at port ${POPT}`);
});
