'use strict';

const http = require('http');

const getParamsObj = (url) => {
  const queryParams = {};

  for (const [key, value] of url.searchParams.entries()) {
    if (queryParams[key]) {
      queryParams[key] = [].concat(queryParams[key], value);
    } else {
      queryParams[key] = value;
    }
  }

  return queryParams;
};

function createServer() {
  const server = http.createServer((req, res) => {
    const url = new URL(req.url, 'http://localhost:5700');
    const pathname = url.pathname.slice(1);

    const parts = pathname === '' ? [] : pathname.split('/');

    const resObject = {
      parts,
      query: getParamsObj(url),
    };

    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify(resObject));
  });

  return server;
}

module.exports = {
  createServer,
};
