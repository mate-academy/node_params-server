'use strict';

const http = require('http');

http.createServer((request, response) => {
  const requestedURL = request.url.split('?');
  const pathnames = requestedURL[0].slice(1);
  const parts = pathnames.split('/');
  const searchParams = new URLSearchParams(requestedURL[1]);
  const query = Object.fromEntries(searchParams.entries());
  const dataToReturn = {
    parts,
    query,
  };

  response.end(JSON.stringify(dataToReturn));
}).listen(8080);
