'use strict';

const http = require('http');

const requstUrl = 'http://localhost:3000/home/users?people=40&hello=world';

const request = http.request(requstUrl, (res) => {
  res.setEncoding('utf8');

  res.on('data', process.stdout.write);
});

request.end();
