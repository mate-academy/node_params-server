'use strict';

const http = require('http');
const PORT = process.env.PORT || 3000;

const pathname = '/hello/world/123';
const search = '?x=1&search=some';

http.get(`http://localhost:${PORT}${pathname}${search}`, (res) => {
  res.setEncoding('utf8');

  res.on('data', data => {
    // eslint-disable-next-line no-console
    console.log(JSON.parse(data));
  });
});
