/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const paramsServer = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    const [path, params] = req.url.split('?');
    const parts = path.split('/').filter((part) => part !== '');
    const queryParams = new URLSearchParams(params);

    const query = {};

    for (const [key, value] of queryParams.entries()) {
      query[key] = value;
    }

    res.end(
      JSON.stringify({
        parts: parts,
        query: query || {},
      }),
    );
  });

  return paramsServer;
}

module.exports = {
  createServer,
};
