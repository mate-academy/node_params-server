/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const [splitUrl] = url.href.split('?');
    const parts = splitUrl
      .split('/')
      .filter(
        (part) => part !== '' && part !== 'http:' && part !== req.headers.host,
      );
    const query = Object.fromEntries(url.searchParams.entries());

    /* eslint-disable no-console */
    console.log(parts, query, url.pathname);
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(JSON.stringify({ parts: parts, query: query }));
  });
}

module.exports = {
  createServer,
};
