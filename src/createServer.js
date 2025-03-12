/* eslint-disable no-console */
'use strict';

const { Server } = require('http');

function createServer() {
  return new Server((req, res) => {
    const messages = {
      errors: [],
    };
    const reqUrl = new URL(req.url, `http://localhost:${req.socket.localPort}`);
    const query = Object.fromEntries(reqUrl.searchParams.entries());
    const parts = reqUrl.pathname.split('/').slice(1);

    console.log(reqUrl);

    if (!parts.length === 0) {
      messages.errors.push({
        message: 'The parts are required!',
      });
    }

    if (messages.errors.length !== 0) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ errors: messages.errors }));

      return;
    }

    try {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ parts, query }));
    } catch {
      res.statusCode = 500;

      res.end(
        JSON.stringify({
          errors: [{ message: 'An error occurred during processing.' }],
        }),
      );
    }
  });
}

module.exports = {
  createServer,
};
