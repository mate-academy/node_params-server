/* eslint-disable no-console */
'use strict';

const http = require('http');

const req = http
  .get(`http://localhost:8080/hello/world/age?john=33&jack=42`, (res) => {
    res.setEncoding('utf8');
    res.on('data', console.log);
  });

req.on('error', console.warn);
req.end();
