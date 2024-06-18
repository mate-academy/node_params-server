/* eslint-disable no-console */
'use strict';

const http = require('http');
const path = require('path');

function createServer() {
  const server = http.createServer((req, res) => {
    const normalizedURL = new URL(
      path.normalize(req.url),
      `http://${req.headers.host}`,
    );
    const searchParams = Object.fromEntries(
      normalizedURL.searchParams.entries(),
    );
    const pathName = normalizedURL.pathname.slice(1);
    const getPathArr = pathName
      .split('/')
      .filter((el) => el.trim().length !== 0);
    const responseObj = {
      parts: getPathArr,
      query: searchParams,
    };

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(responseObj));
  });

  return server;
}

module.exports = {
  createServer,
};
