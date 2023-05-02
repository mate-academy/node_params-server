'use strict';

require('dotenv').config();

const http = require('http');
const hostname = process.env.HOSTNAME;
const port = process.env.PORT;

http.get(`http://${hostname}:${port}/src/ads?query=123&sex=f`, (res) => {
  res.setEncoding('utf8');
  res.on('data', global.console.log);
});
