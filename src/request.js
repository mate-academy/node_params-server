/* eslint-disable no-console */
'use strict';

const http = require('http');

const parts = ['hello', 'sfdsadf', 'world', '1423'];
const query = {
  x: 1,
  search: 'some',
};

const pathname = parts.reduce((prev, curr) => prev + '/' + curr, '');
const queryParams = () => {
  let result = '?';

  for (const key in query) {
    result += key + '=' + query[key] + '&';
  }

  return result.slice(0, -1);
};

const req = http.request(
  `http://localhost:3000${pathname}${queryParams()}`,
  (res) => {
  },
);

req.on('error', () => {
  console.error('Error occurred');
});

req.end();
