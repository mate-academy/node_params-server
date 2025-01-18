/* eslint-disable padding-line-between-statements */
/* eslint-disable no-console */
'use strict';
const http = require('http');

function createServer() {
  /* Write your code here */
  // Return instance of http.Server class
  const server = http.createServer((req, res) => {
    const normalizedUrl = new URL(req.url, `http://${req.headers.host}`);
    console.log(normalizedUrl);

    res.setHeader('Content-Type', 'application/json');

    if (normalizedUrl.pathname === '/') {
      res.statusCode = 200;

      // res.end();
      // return;
    }

    const parts = normalizedUrl.pathname
      .split('/')
      .filter((part) => part !== '');

    const query =
      Object.fromEntries(normalizedUrl.searchParams.entries()) || {};
    // const query = {};

    // for (const key in query) {
    //   if (!query[key]) {
    //     delete query[key];
    //   }
    // }

    // console.log(req.headers.host);
    console.log(query);
    const data = {
      parts,
      query,
    };
    // console.log(data);
    console.log(data);

    res.end(JSON.stringify(data));
  });

  return server;
}

module.exports = {
  createServer,
};
