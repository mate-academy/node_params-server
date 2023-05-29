'use strict';

const http = require('http');
const url = require('url');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  const normalizedUrl = new url.URL(req.url, `http://${req.headers.host}`);

  const result = {
    'parts': [],
    'query': {
    },
  };

  const pathname = normalizedUrl.pathname;
  const parts = pathname.split('/').filter((el) => el !== '');

  result.parts.push(...parts);

  if (normalizedUrl.searchParams) {
    for (const [key, value] of normalizedUrl.searchParams.entries()) {
      if (result.query.hasOwnProperty(key)) {
        if (Array.isArray(result.query[key])) {
          result.query[key].push(value);
        } else {
          result.query[key] = [result.query[key], value];
        }
      } else {
        result.query[key] = value;
      }
    }
  }

  res.end();

  return JSON.stringify(result);
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${PORT}`);
});
