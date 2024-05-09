/* eslint-disable no-console */
'use strict';

const http = require('http');
const { sendResponse, parseUrl } = require('./utils/helpers');
const { statusCodes, errorMessages } = require('./utils/constants');

function createServer() {
  const server = http.createServer((req, res) => {
    const { OK, INTERNAL_SERVER_ERROR } = statusCodes;
    const parsedData = parseUrl(req);

    try {
      sendResponse(res, OK, parsedData);
    } catch {
      sendResponse(res, INTERNAL_SERVER_ERROR, {
        errors: [{ message: errorMessages.internalError }],
      });
    }
  });

  return server;
}

module.exports = {
  createServer,
};
