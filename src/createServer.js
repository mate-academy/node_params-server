/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    const params = [];

    const { pathname, searchParams } = new URL(
      req.url, `http://${req.headers.host}`);

    const cleanedPathname = pathname.startsWith('/')
      ? pathname.slice(1) : pathname;

    const arrayOfParams = cleanedPathname.split('/');

    for (const param of arrayOfParams) {
      const correctParam = param || 'test';

      params.push(correctParam);
    }

    const queryObject = {};

    searchParams.forEach((value, key) => {
      queryObject[key] = value;
    });

    const responseData = {
      parts: params,
      query: queryObject,
    };

    console.log(pathname, searchParams,
      Object.fromEntries(Array.from(searchParams.entries())));

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(responseData));
  });

  return server;
}

module.exports = {
  createServer,
};
