'use strict';
import http from 'http';
import url from 'url';

const port = 8080;

const server = http.createServer((req, res) => {
  const normalizedUrl = new URL(req.url, `http://${req.headers.host}`);

  const parsedUrl = url.parse(req.url);
  const pathname = parsedUrl.pathname.split('/');

  const params = Object.fromEntries(normalizedUrl.searchParams.entries);

  return {
    "parts": pathname,
    "query": params
  }
})

server.listen(port, () => {
  console.log(`Server is running on http://lochalhost:${port}`);
})
