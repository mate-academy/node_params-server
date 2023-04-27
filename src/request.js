'use strict';

const http = require('http');

const base = 'http://localhost:8080';
const end = '/hello/world/123?x=1&search=some&sex=m';

const req = http.request(base + end, (res) => {
  res.setEncoding('utf8');

  res.on('data', (data) => {
    global.console.log(data);
  });

  res.on('error', (err) => {
    global.console.log(err);
  });
});

req.end();
