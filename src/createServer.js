'use strict';

const http = require('http');
const { parseUrl } = require('./parseUrl');

const createServer = () =>
  http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    const parseResult = parseUrl(req.url);

    const data = JSON.stringify(parseResult);

    res.statusCode = 200;
    res.end(data);
  });

module.exports = { createServer };
