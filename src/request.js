/* eslint-disable no-console */
'use strict';

const http = require('http');

const href = 'http://localhost:3000/hello/world/123'
  + '?x=1&search=some&centuries=16&centuries=17'
  + '&centuries=18&centuries=19&centuries=20';

const request = http.request(href, (res) => {
  res.setEncoding('utf8');

  res.on('data', (data) => {
    console.log(data);
  });
});

request.end();
