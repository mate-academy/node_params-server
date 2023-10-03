'use strict';

function handleRequest(req, res) {
  const normalizedURL = new URL(req.url,
    `http://${req.headers.host}`);

  const pathnameParts = normalizedURL.pathname.split('/').slice(1);
  const params = Object.fromEntries(normalizedURL.searchParams.entries());
  const myObject = {
    parts: pathnameParts,
    query: params,
  };

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(myObject));
}

module.exports = { handleRequest };
