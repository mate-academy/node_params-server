/* eslint-disable no-console */
const http = require('http');

const req = http.request(
  'http://localhost:5701/hello/world/123?x=1&search=some&dupek=1&dupek=11',
  (res) => {
    res.setEncoding('utf-8');

    res.on('data', (data) => {
      console.log(data);
    });

    req.on('error', (err) => {
      console.error('Request failed:', err);
    });
  },
);

req.end();
