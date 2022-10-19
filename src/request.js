'use strict';

const http = require('http');

const PORT = process.env.PORT || 3000;
const PATHNAME = process.env.PATHNAME || `/hello/world/123`;
const QUERYPARAMS = process.env.QUERYPARAMS || `?x=1&search=some`;

const href = `http://localhost:${PORT}${PATHNAME}${QUERYPARAMS}`;

const req = http
  .get(href, (res) => {
    res.setEncoding('utf8');
    // eslint-disable-next-line no-console
    res.on('data', console.log);
  });

req.on('error', () => {
  throw new Error('Cannot reach server');
});
