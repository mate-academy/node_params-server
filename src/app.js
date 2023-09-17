'use strict';
/* eslint-disable no-console */

const http = require('http');
const { convertUrlToParams } = require('./helper');

require('dotenv').config();

const PORT = process.env.PORT || 8081;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;

  res.end(JSON.stringify(convertUrlToParams(req.url)));
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
