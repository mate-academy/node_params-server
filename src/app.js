'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((request, response) => {
    const currentURL = new URL('htto://' + request.url);

    response.setHeader('Content-Type', 'application/json');

    const requestText = currentURL.pathname.slice(1).split('/');

    const requestCase = Object.fromEntries(currentURL.searchParams.entries());

    const result = {
      parts: requestText,
      query: requestCase,
    };

    response.end(JSON.stringify(result));
  });

  return server;
}

createServer()
  .listen(5700, () => {
    // eslint-disable-next-line no-console
    console.log('Server started! 🚀');
  });
