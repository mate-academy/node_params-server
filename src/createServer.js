/* eslint-disable no-console */
'use strict';

const http = require('node:http');

function createServer() {
  /* Write your code here */
  // Return instance of http.Server class
  return http.createServer((req, res) => {
    const parts = req.url
      .split('?')[0]
      .replaceAll('//', '/')
      .replaceAll('/', ',')
      .split(',');

    const myURL = new URL(req.url, 'http://localhost');
    const newSearchParams = new URLSearchParams(myURL.searchParams);

    const responce = {};

    responce['parts'] = [];

    if (parts.length > 0) {
      for (const item of parts) {
        if (item !== '') {
          responce['parts'].push(item);
        }
      }
    }

    responce['query'] = {};

    if (newSearchParams.size > 0) {
      for (const [name, value] of newSearchParams) {
        responce['query'][name] = value;
      }
    }

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(responce));
  });
}

module.exports = {
  createServer,
};
