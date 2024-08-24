/* eslint-disable no-console */
'use strict';

const http = require('http');
const querystring = require('querystring');

function createServer() {
  const server = http.createServer((req, res) => {
    const [baseURL, query] = req.url.split('?');

    const queryParms = Object.assign({}, querystring.parse(query));

    const splitURL = baseURL.split('/').filter((item) => item.length > 0);

    console.log(queryParms, splitURL);

    const response = {
      parts: splitURL,
      query: queryParms,
    };

    res.statusCode = 200;
    res.statusMessage = 'OK';
    res.setHeader('Content-Type', 'application/json');

    res.end(JSON.stringify(response));
  });

  return server;
}

module.exports = {
  createServer,
};
