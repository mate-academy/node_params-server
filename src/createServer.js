/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    res.setHeader('Content-type', 'application/json');

    const formattedUrl = req.url.replace(/\/+/g, '/');
    const normalizedUrl = new URL(formattedUrl, `http://${req.headers.host}`);

    const parts = normalizedUrl.pathname.slice(1).split('/');
    const query = getSearchParams(normalizedUrl.search);

    const data = {
      parts,
      query,
    };

    res.end(JSON.stringify(data));
  });

  return server;
}

const getSearchParams = (search) => {
  return search
    .slice(1)
    .split('&')
    .reduce((acc, item) => {
      const [key, value] = item.split('=');

      if (acc.hasOwnProperty(key)) {
        if (Array.isArray(acc[key])) {
          acc[key].push(value);

          return acc;
        }

        acc[key] = [acc[key], value];

        return acc;
      }
      acc[key] = value;

      return acc;
    }, {});
};

module.exports = {
  createServer,
};
