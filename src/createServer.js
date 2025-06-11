/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    const protocol = req.socket.encrypted ? 'https' : 'http';
    const url = new URL(req.url, `${protocol}://${req.headers.host}`);
    const path = url.pathname.slice(1);
    const query = req.url.split('?')[1];
    const params = new URLSearchParams(query);
    const findParams = Object.fromEntries(params.entries());

    console.log(path, query);

    res.end(
      JSON.stringify({
        parts: path.split('/'),
        query: findParams,
      }),
    );
  });
}

module.exports = {
  createServer,
};
