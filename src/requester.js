/* eslint-disable no-console */
'use strict';

const http = require('http');

const requester = http.request(
  'http://localhost:8080/hello/world/123?x=1&search=some', (respone) => {
    respone.setEncoding('utf-8');

    respone.on('data', (data) => {
      console.log(data);
    });
  });

requester.on('error', (error) => {
  console.log(error);
});

requester.end();
