/* eslint-disable no-console */
'use strict';

const http = require('http');
const { prepareResponse } = require('./prepareResponse');

function createServer() {
  return http.createServer((request, response) => {
    response.setHeader('Content-Type', 'application/json');
    response.end(prepareResponse(request));
  });
}

module.exports = {
  createServer,
};
