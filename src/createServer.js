'use strict';

const http = require('http');

const createServer = () => {
  return http.createServer((req, res) => {
    const requestUrl = new URL(req.url, 'http://' + req.headers.host);

    const parts = requestUrl.pathname.split('/').filter(Boolean);

    const query = {};

    for (const [key, value] of requestUrl.searchParams) {
      query[key] = value;
    }

    res.write(JSON.stringify({
      parts,
      query,
    }));

    res.end();
  });
};

module.exports = { createServer };
