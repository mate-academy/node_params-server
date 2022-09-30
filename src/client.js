'use strict';

const http = require('http');

const BASE_URL = 'http://localhost';
const PORT = '3000';
const PATH = '/hello/world/123';
const SEARCH = 'x=1&search=some';

const req = http.request(`${BASE_URL}:${PORT}${PATH}?${SEARCH}`, (res) => {
  res.setEncoding('utf8');

  res.on('data', (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  });
});

req.on('error', (error) => {
  // eslint-disable-next-line no-console
  console.log(error);
});

req.end();
