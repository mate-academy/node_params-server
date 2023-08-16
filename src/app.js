/* eslint-disable no-console */
'use strict';

const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(234, { 'Content-Type': 'application/json' });

  const reqUrl = new URL(req.url, `http://${req.headers.host}`);
  const params = Object.fromEntries(new URLSearchParams(reqUrl.search));
  const userAgent = JSON.stringify(req.headers['user-agent']);

  fs.appendFileSync('./logs/userAgentLog.json', userAgent);

  console.log(req.headers);
  console.log(req.url);

  res.end(JSON.stringify({
    parts: reqUrl.pathname.slice(1).split('/'),
    query: { ...params },
  }));
});

server.listen(port, () => {
  console.log(`Server running http://localhost:${port}`);
});
