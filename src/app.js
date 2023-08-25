'use strict';

const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const normalizedUrl = new URL(req.url, `http://${req.headers.host}`);
  const pathnameArray = normalizedUrl.pathname.split('/').slice(1);
  const queryParams = Object.fromEntries(normalizedUrl.searchParams.entries());

  const resJSON = JSON.stringify({
    pathname: pathnameArray,
    query: queryParams,
  });

  res.end(resJSON);
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${PORT}`);
});
