/* eslint-disable no-console */
'use strict';

const http = require('node:http');

function createServer() {
  const server = http.createServer((req, res) => {
    const [path, queryString] = req.url.split('?');
    const pathParts = path.slice(1).split('/').filter(Boolean);

    const params = new URLSearchParams(queryString);
    const paramsObj = Object.fromEntries(params);

    console.log(params);
    console.log(paramsObj);

    const payload = {
      parts: pathParts,
      query: paramsObj,
    };

    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(payload));
    res.end();
  });

  return server;
}

module.exports = {
  createServer,
};
