/* eslint-disable no-console */
'use strict';

const http = require('http');

const createServer = http.createServer((req, res) => {
  const requestUrl = new URL(req.url, `http://${req.headers.host}`);
  const parts = requestUrl.pathname.slice(1).split('/');
  const query = Object.fromEntries(requestUrl.searchParams.entries());

  res.setHeader('Content-Type', 'application/json');

  res.statusCode = 200;

  const responseData = {
    parts,
    query,
  };
  const jsonContent = JSON.stringify(responseData);

  res.end(jsonContent);
});

module.exports = {
  createServer,
};

createServer.listen(3005, () => {
  console.log('Server started! 🚀');
});
