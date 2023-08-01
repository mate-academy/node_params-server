'use strict';

const http = require('http');

const { convertParamsToObject } = require('./convertSearchParams');

const createServer = () => {
  const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    const [pathname, search] = req.url.split('?');

    const parts = pathname
      .slice(1)
      .split('/');

    const query = convertParamsToObject(search);

    res.statusCode = 200;
    res.statusMessage = 'OK';

    res.end(JSON.stringify({
      parts,
      query,
    }));
  });

  return server;
};

module.exports = { createServer };
