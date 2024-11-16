/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    const responseObject = {};

    const [path, params] = req.url.split('?');
    const parts = path.split('/').filter(Boolean);
    const query = Object.fromEntries(new URLSearchParams(params).entries());

    if (parts.length) {
      responseObject.parts = [...parts];
    }

    responseObject.query = { ...query };

    res.setHeader('content-type', 'application/json');
    res.end(JSON.stringify(responseObject, null, 2));
  });

  return server;
}

module.exports = {
  createServer,
};
