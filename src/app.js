'use strict';

const http = require('http');

const server = http.createServer(foo);

server.listen(5000);

function foo(req, res) {
  const [parts, query] = req.url.split('?');

  const contentRes = {
    parts: parts.split('/').filter(p => p),
    query: query
      ? Object.fromEntries(query.split('&').map(q => q.split('=')))
      : {},
  };

  res.end(JSON.stringify(contentRes));
}
