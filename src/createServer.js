/* eslint-disable no-console */
'use strict';

const http = require('http');
const { requestParse } = require('./requestParse');
const { jsonResponse } = require('./jsonResponse');

function createServer() {
  return http.createServer((req, res) => {
    const { parts, query } = requestParse(req.url);

    return jsonResponse(res, 200, {
      parts: parts,
      query: query,
    });
  });
}

module.exports = {
  createServer,
};
