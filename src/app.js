'use strict';

const http = require('http');
const { getParams } = require('./getParams');
const myConsole = require('console');

const PORT = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
  if (request.url === '/') {
    myConsole.log('Pathname and search params are missed.');

    return;
  }

  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify(getParams(request.url)));
});

server.listen(PORT, () => {
  myConsole.log(`Server is running`);
});

http.get(`http://localhost:${PORT}/test?abc=1&abc=2&x=1`);
