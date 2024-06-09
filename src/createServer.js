/* eslint-disable no-console */
'use strict';

const http = require('http');
const url = require('url');

function createServer() {
  return http.createServer((req, res) => {
    const fixedUrl = req.url.replace(/\/\/+/g, '/');
    const normalizedUrl = new url.URL(fixedUrl, `http://${req.headers.host}`);

    const obj = {};

    obj.parts = normalizedUrl.pathname.split('/').filter((e) => e.length > 0);

    obj.query = {};

    normalizedUrl.searchParams.forEach((value, key) => {
      obj.query[key] = value;
    });

    console.log(normalizedUrl);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(obj));
  });
}

module.exports = {
  createServer,
};
