'use strict';

const http = require('http');
const url = require('url');
const { createPathArray, createParamsObj } = require('./paramsHelper');

const server = http.createServer((req, res) => {
  const normalizedUrl = new url.URL(req.url, `http://${req.headers.host}`);

  try {
    const pathname = normalizedUrl.pathname;

    if (pathname !== '/favicon.ico') {
      const parts = createPathArray(pathname);
      const query = createParamsObj(normalizedUrl.searchParams);

      res.setHeader('Content-Type', 'application/json');

      const resultObject = JSON.stringify({
        parts,
        query,
      });

      res.end(resultObject);
    }
  } catch (error) {
    res.statusCode = 503;
    res.end('Some error occurred');
  }
});

server.listen(8080);

module.exports = { server };
