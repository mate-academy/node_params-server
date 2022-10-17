'use strict';

const http = require('http');

const PORT = process.env.PORT || 3000;
const pathname = process.env.pathname || `/hello/world/123`;
const queryParams = process.env.queryParams || `?x=1&search=some`;

const req = http
  .get(`http://localhost:${PORT}${pathname}${queryParams}`, (res) => {
    res.setEncoding('utf8');
    // eslint-disable-next-line no-console
    res.on('data', console.log);
  });

req.on('error', () => {
  throw new Error('Cannot reach server');
});
