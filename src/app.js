'use strict';

const http = require('http');
const { readParam } = require('./paramsHelper');

const server = http.createServer((req, res) => {
  if (req.url !== '/favicon.ico') {
    const path = req.url;

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(readParam(path)));
  }
});

server.listen(8080);

module.exports = { server };
