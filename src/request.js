/* eslint-disable no-console */
'use strict';

const http = require('http');

const href = 'http://localhost:3000/hello/world/123?x=1&search=some';

const request = http.request(href, (res) => {
  res.setEncoding('utf8');

  res.on('data', (data) => {
    console.log(data);
  });
});

request.end();
