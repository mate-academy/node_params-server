'use strict';

const http = require('http');

const app = () => {
  return http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    const {
      pathname,
      searchParams,
    } = new URL(req.url, `http://${req.headers.host}`);

    const parts = pathname.split('/');
    const query = Object.fromEntries(searchParams.entries());

    res.statusCode = 200;
    res.statusMessage = 'OK';

    res.end(JSON.stringify({
      parts,
      query,
    }));
  });
};

module.exports = { app };
