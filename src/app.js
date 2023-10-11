'use strict';

const { getParams } = require('./getParams');

function createServer() {
  const server = process.env.createServer((req, res) => {
    const params = getParams(req.url);

    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.statusMessage = 'OK';
    res.end(JSON.stringify(params));
  });

  return server;
}

module.exports = { createServer };
