'use strict';

const http = require('http');

const PORT = process.env.PORT || 8000;

const server = http.createServer((req, res) => {
  const getUrl = new URL(req.url, `http://localhost:${PORT}`);
  const path = getUrl.pathname.split('/').filter((x) => x);
  const params = Object.fromEntries(getUrl.searchParams.entries());
  const result = {
    parts: path,
    query: params,
  };

  res
    .writeHead(200, 'ok', {
      'Content-Type': 'application/json',
    })
    .end(JSON.stringify(result));
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${PORT}`);
});
