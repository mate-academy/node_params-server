/* eslint-disable no-console */
'use strict';

const http = require('http');
const { getSearchParams } = require('./getSearchParams');
const { getPathParts } = require('./getPathParts');
const { sendJSONResponse } = require('./sendResponse');

function createServer() {
  const server = http.createServer((req, res) => {
    const url = new URL(req.url || '', `http://${req.headers.host}`);

    const query = getSearchParams(url);
    const parts = getPathParts(url);

    try {
      return sendJSONResponse(res, 200, { parts, query });
    } catch (err) {
      return sendJSONResponse(
        res,
        500,
        { errors: { message: err.message } },
        'Internal Server Error',
      );
    }
  });

  return server;
}

module.exports = {
  createServer,
};
