/* eslint-disable no-console */
'use strict';

const http = require('http');
const url = require('url');

function createServer() {
  return http.createServer((req, res) => {
    res.setHeader('content-type', 'application/json');
    res.statusCode = 200;

    const reqUrl = new url.URL('http://localhost:5701' + req.url);
    const paths = reqUrl.pathname
      .split('/')
      .slice(1)
      .filter((path) => path !== '');

    const params = {};

    reqUrl.search
      .slice(1)
      .split('&')
      .forEach((param) => {
        const [k, v] = param.split('=');

        params[k] = v === '' ? '' : v;
      });

    res.end(JSON.stringify({ parts: paths, query: params }));
  });
}

module.exports = {
  createServer,
};
