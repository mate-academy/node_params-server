'use strict';

const http = require('http');

const BASE = 'http://localhost:8000';
const path = '/hello/world/123/?x=1&search=some&search2=some2';

const request = http.get(BASE + path, (res) => {
  res.setEncoding('utf8');

  // eslint-disable-next-line no-console
  res.on('data', console.log);
});

// eslint-disable-next-line no-console
request.on('error', console.log);
