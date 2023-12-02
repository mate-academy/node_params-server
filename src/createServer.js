'use strict';

const http = require('http');

const createServer = () => {
  const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    const normalizedUrl = new URL(req.url, `http://${req.headers.host}`);

    const parts = normalizedUrl.pathname.slice(1).split('/');
    const query = {};

    normalizedUrl.searchParams.forEach((value, key) => {
      if (query[key]) {
        query[key] = [...query[key], value];
      } else {
        query[key] = value;
      }
    });

    // decided to make the response with null instead of throwing an error
    const response = {
      parts: parts[0] ? parts : null,
      query: normalizedUrl.query ? query : null,
    };

    res.end(JSON.stringify(response));
  });

  return server;
};

module.exports = {
  createServer,
};
