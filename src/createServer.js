/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  /* Write your code here */
  // Return instance of http.Server class
  const server = http.createServer((req, res) => {
    const myUrl = new URL(req.url, `http://${req.headers.host}`);
    const query = Object.fromEntries(myUrl.searchParams);
    const myPathName = myUrl.pathname.split('/');
    const result = [];

    for (let i = 0; i < myPathName.length; i++) {
      if (myPathName[i].length !== 0) {
        result.push(myPathName[i]);
      }
    }

    res.statusCode = 200;
    res.statusMessage = 'OK';
    res.setHeader('Content-Type', 'application/json');

    res.end(
      JSON.stringify({
        parts: result,
        query: query,
      }),
    );
  });

  return server;
}

module.exports = {
  createServer,
};
