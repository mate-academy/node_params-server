/* eslint-disable no-console */
const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    const [routes, queryParams] = req.url.split('?');
    const parts = routes.split('/').filter((route) => route);
    const query = Object.fromEntries(
      new URLSearchParams(queryParams).entries(),
    );

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    res.end(
      JSON.stringify({
        parts,
        query,
      }),
    );
  });

  return server;
}

module.exports = {
  createServer,
};
