/* eslint-disable no-console */
'use strict';

const http = require('http');

const PORT = process.env.PORT || 8080;

function echoServer() {
  const server = http.createServer((req, res) => {
    const normalizedURL = new URL(req.url, `http://localhost:${PORT}`);
    const parts = normalizedURL.pathname.split('/').splice(1);
    const query = Object.fromEntries(
      normalizedURL.searchParams.entries()
    );

    const resultObj = {
      parts,
      query,
    };

    console.log(resultObj);
    res.end(JSON.stringify(resultObj, null, 2));
  });

  server.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
  });

  return server;
}

echoServer();

module.exports = { echoServer };
