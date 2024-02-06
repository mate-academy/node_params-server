/* eslint-disable no-console */
'use strict';

const http = require('http');
const { getObjectFromQuery } = require('./getObjectFromQuery');

function createServer() {
  const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    const relativeUrl = req.url.startsWith('//') ? req.url.slice(1) : req.url;
    const normalizedUrl = new URL(relativeUrl, `http://${req.headers.host}`);
    const parts = normalizedUrl.pathname.slice(1).split('/');
    const query = getObjectFromQuery(normalizedUrl.searchParams);

    const data = {
      parts,
      query,
    };

    res.end(JSON.stringify(data));
  });

  return server;
}

module.exports = {
  createServer,
};
