/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.statusMessage = 'OK';

    const result = {};

    const reqUrlSplited = req.url.split('?');

    result.parts = reqUrlSplited[0].split('/').filter((e) => e.length > 0);

    const params = new URLSearchParams(reqUrlSplited[1]);

    const allParams = {};

    params.forEach((value, key) => {
      allParams[key] = value;
    });

    result.query = allParams;

    res.end(JSON.stringify(result));
  });

  return server;
}

module.exports = {
  createServer,
};
