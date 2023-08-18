'use strict';

const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  try {
    const [pathname, params] = req.url.split('?');

    const urlParams = new URLSearchParams(params);

    const requestObject = {
      parts: pathname.split('/').filter(pathpart => pathpart),
      query: Object.fromEntries([...urlParams.entries()]),
    };

    res.statusCode = 200;

    res.end(JSON.stringify(requestObject));
  } catch (err) {
    res.statusCode = 400;

    res.end(err.message);
  }
});

server.listen(PORT, () => {
  process.stdout.write(`Server is running on http://localhost:${PORT}\n`);
});
