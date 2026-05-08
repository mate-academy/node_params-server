/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    const { url } = req;
    const out = {
      parts: url.split('?')[0].split('/').filter(Boolean),
      query: {
        ...Object.fromEntries(new URLSearchParams(url.split('?')[1])),
      },
    };

    res.statusCode = 200;
    res.statusMessage = 'OK';
    res.end(JSON.stringify(out));
  });

  return server;
}

module.exports = {
  createServer,
};
