/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.statusMessage = 'OK';

    const result = {};

    const reqUrl = req.url;
    const reqUrlSplited = reqUrl.split('?');

    result.parts = reqUrlSplited[0].split('/').splice(1);

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
