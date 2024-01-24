/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    // Parsowanie request URL
    const url = new URL(req.url, `http://${req.headers.host}`);
    const parts = url.pathname.split('/').filter(part => part !== '');

    // Parsowanie zapytania
    const query = {};

    url.searchParams.forEach((value, key) => {
      query[key] = value;
    });

    // Tworzenie JSON response
    const response = {
      parts,
      query,
    };

    console.log(response);

    // Ustawienie nagłówków i wysłanie response JSON
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
  });
}

module.exports = {
  createServer,
};
