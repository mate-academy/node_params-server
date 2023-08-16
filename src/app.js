/* eslint-disable no-console */
'use strict';

const http = require('http');
const PORT = 3000;

const getParams = () => {
  const server = http.createServer((request, responce) => {
    responce.setHeader('Content-Type', 'application/json');

    const urls = new URL(request.url, `http://${request.headers.host}`);

    const parts = urls.pathname.split('/').filter((part) => part !== '');

    const params = Object.fromEntries(urls.searchParams.entries());

    const objToSend = {
      parts,
      query: params,
    };

    responce.end(JSON.stringify(objToSend));
  });

  server.listen(PORT, () => console.log('SERVER IS WORKING'));
};

getParams();
