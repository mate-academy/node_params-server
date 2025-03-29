/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    let newUrl = req.url;
    const startWith = req.url.slice(0, 2);

    if (startWith === '//') {
      newUrl = req.url.slice(1);
    }

    const { pathname, searchParams } = new URL(
      newUrl,
      `http://${req.headers.server}`,
    );

    const parts = pathname.replaceAll('/', ' ').trim().split(' ');

    const query = Object.fromEntries(searchParams.entries());

    res.end(JSON.stringify({ parts, query }));
  });

  return server;
}

module.exports = {
  createServer,
};
