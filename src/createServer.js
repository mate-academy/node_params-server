/* eslint-disable no-console */
'use strict';

const http = require('http');
const { checkReq } = require('./checkReq');
const { getRequestParts } = require('./getRequestParts');
const { createResponse } = require('./createResponse');

const createServer = () => {
  return http.createServer((req, res) => {
    const normalizedUrl = new URL(req.url, `http://${req.headers.host}`);

    if (checkReq(normalizedUrl, res)) {
      return;
    }

    const { pathname, queries } = getRequestParts(normalizedUrl);

    res.statusCode = 200;
    res.statusMessage = 'OK';
    res.setHeader('Content-Type', 'application/json');

    const response = createResponse(pathname, queries);

    res.end(response);
  });
};

module.exports = {
  createServer,
};
