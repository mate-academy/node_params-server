/* eslint-disable no-console */
'use strict';

const http = require('node:http');

function createServer() {
  /* Write your code here */
  // Return instance of http.Server class

  const server = http.createServer((req, res) => {
    const ret = {
      parts: [],
      query: {},
    };

    const reqArr = req.url.split('?');
    const parts = reqArr[0].split('/');
    const params = reqArr[1] ? new URLSearchParams(reqArr[1]) : new URLSearchParams();

    // get usefull parts
    const realParts = parts.filter((v) => {
      return v !== '';
    });

    ret.parts = realParts;

    for (const key of params.keys()) {
      ret.query[key] = params.get(key);
    }

    // headers should be set before sending data
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;

    res.write(JSON.stringify(ret));
    res.end();
  });

  return server;
}

module.exports = {
  createServer,
};
