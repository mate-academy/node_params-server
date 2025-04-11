/* eslint-disable no-console */
'use strict';

const http = require('http');
const querystring = require('node:querystring');

function createServer() {
  /* Write your code here */
  // Return instance of http.Server class

  const server = http.createServer((req, res) => {
    const searchUrl = new URL(req.url, `http://${req.headers.host}`);

    const params = querystring.parse(searchUrl.search.replace('?', ''));

    const pathname = searchUrl.pathname;

    const cleanedSegments = pathname
      .split('/')
      .map((s) => s.trim())
      .filter(Boolean);

    res.setHeader('Content-Type', 'application/json');

    res.end(
      JSON.stringify({
        parts: cleanedSegments,
        query: params,
      }),
    );
  });

  return server;
}

module.exports = {
  createServer,
};
