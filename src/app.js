'use strict';

const http = require('http');

const PORT = process.env.PORT || 3000;

function createQuery(string) {
  const paramsEntries = string
    .split('&')
    .map(param => param.split('='))
    .filter(param => param[0]);

  return Object.fromEntries(paramsEntries);
}

const server = http.createServer((req, res) => {
  try {
    req.statusCode = 200;

    const [pathname, params] = req.url.split('?');

    const requestObject = {
      parts: pathname.split('/').filter(pathpart => pathpart),
      query: createQuery(params),
    };

    res.end(JSON.stringify(requestObject));
  } catch (err) {
    req.statusCode = 400;

    req.end(err.message);
  }
});

server.listen(PORT, () => {
  process.stdout.write(`Server is running on http://localhost:${PORT}\n`);
});
