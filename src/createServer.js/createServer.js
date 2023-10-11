'use strict';

const http = require('http');

const createServer = () => {
  const server = http.createServer((req, res) => {
    res.setHeader('Content-type', 'application/json');

    const [text, queryString] = req.url.slice(1).split('?');
    const parts = text.split('/');

    const query = {};

    queryString.split('&').forEach(queryItem => {
      const [key, value] = queryItem.split('=');

      query[key] = value;
    });

    const result = {
      parts,
      query,
    };

    res.end(JSON.stringify(result));
  });

  return server;
};

module.exports = {
  createServer,
};
