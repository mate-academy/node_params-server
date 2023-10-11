'use strict';

const http = require('http');
const { PORT, serverLink } = require('./serverSetup');
const { onResponseOk, onResponseDenied } = require('./responseHeaders');

function createServer() {
  const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
      onResponseDenied(res);
      res.end();

      return;
    }

    const normalizedUrl = new URL(req.url, serverLink);
    const path = normalizedUrl.pathname;
    const normalisedPath = path.slice(1).split('/');
    const searchParams = {};

    normalizedUrl.searchParams
      .forEach((value, key) => {
        searchParams[key] = value;
      });

    onResponseOk(res);

    res.end(JSON.stringify({
      parts: normalisedPath,
      query: searchParams,
    }));
  });

  server.listen(PORT, () => {
    // eslint-disable-next-line
    console.log(`The server link is ${serverLink}`);
  });
}

module.exports = {
  createServer,
};
