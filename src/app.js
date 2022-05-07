'use strict';

const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;

  const requestUrl = new URL(req.url, `http://${req.headers.host}`);

  const responseJSON = getResponseJSON(requestUrl);

  res.write(responseJSON);

  res.end();
});

server.listen(PORT, () => {
  console.log(`Server is active on http://localhost:${PORT}`);
});

function getResponseJSON(requestUrl) {
  const parts = requestUrl.pathname.slice(1).split('/');
  const query = Object.fromEntries(requestUrl.searchParams.entries());

  return JSON.stringify({
    parts,
    query,
  });
}
