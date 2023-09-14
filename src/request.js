/* eslint-disable no-console */
'use strict';

const http = require('http');

const BASE = 'http://localhost:8080';
const href = BASE + '/hello/world/123?x=1&search=some';

const request = http.request(href, (res) => {
  res.on('data', (chunk) => {
    console.log(chunk.toString());
  });
});

request.end();
