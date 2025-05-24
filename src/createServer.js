/* eslint-disable no-console */
'use strict';

const http = require('node:http');
const url = require('node:url');

function createServer() {
  /* Write your code here */
  // Return instance of http.Server class

  return http.createServer((req, res) => {
    const urlReq = url.parse(req.url, true);

    const parts = urlReq.pathname.split('/').filter((w) => {
      return w.length !== 0;
    });
    const query = urlReq.query;

    const response = {
      parts,
      query,
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });

    res.end(JSON.stringify(response));
  });
}

module.exports = {
  createServer,
};
