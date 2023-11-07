/* eslint-disable no-console */
'use strict';

const http = require('http');

const BASE = 'http://localhost:3005';

const href = BASE
+ '/hello/world/123?x=1&search=some';

const req = http.request(href, (res) => {
  res.setEncoding('utf8');
  console.log(res.statusCode);
  res.on('data', console.log);
});

req.on('error', console.warn);

req.end();
