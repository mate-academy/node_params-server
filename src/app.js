'use strict';

const http = require('http');

function app() {
  return http.createServer((req, res) => {
    const normilizeUrl = new URL(req.url, `http://${req.headers.host}`);

    const parts = normilizeUrl.pathname.slice(1).split('/');
    const query = Object.fromEntries(normilizeUrl.searchParams.entries());

    res.setHeader('Content-type', 'application/json');

    res.end(JSON.stringify({
      parts,
      query,
    }));
  });
}

module.exports = app;
