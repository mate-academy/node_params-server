/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    const url = new URL(req.url || '', `http://${req.headers.host}`);
    const text = url.pathname.slice(1);
    const textArray = text.replaceAll('//', '/').split('/');
    const searchParams = url.searchParams;

    res.writeHead(200);

    const response = {};

    if (textArray.length > 0) {
      response.parts = textArray;
    }

    response.query = response.query || {};

    for (const [key, value] of searchParams.entries()) {
      response.query[key] = value;
    }
    console.log(response);
    res.end(JSON.stringify(response));
  });
}

module.exports = {
  createServer,
};
