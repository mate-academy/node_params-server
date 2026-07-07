/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });

    if (req.url === '/') {
      res.end();

      return;
    }

    const [partsString, paramString] = req.url.split('?');
    const parts = partsString.slice(1).split(/\/+/);
    const query = Object.fromEntries(
      new URLSearchParams(paramString).entries(),
    );

    res.end(JSON.stringify({ parts, query }, null, 2));
  });
}

module.exports = {
  createServer,
};
