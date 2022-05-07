'use strict';

const http = require('http');

const baseUrl = 'http://localhost:3000';
const path = '/hello/world/123';
const searchParams = '123?x=1&search=some';

const requestUrl = baseUrl + path + searchParams;

const req = http.request(requestUrl, (res) => {
  res.setEncoding('utf-8');

  res.on('data', (data) => {
    console.log(data);
  });
});

req.on('error', (error) => {
  console.log(error);
});

req.end();
