'use strict';

const http = require('http');

function createServer() {
  const PORT = process.env.PORT || 3000;

  const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;

    const text = req.url.split('?')[0];
    const queryString = req.url.split('?')[1];
    const resObj = {
      'parts': text.split('/'),
      'query': {},
    };

    for (const el of queryString.split('&')) {
      const elArr = el.split('=');

      resObj[elArr[0]] = elArr[1];
    }

    req.on('error', (error) => {
      throw new Error(error);
    });

    res.end(resObj);
  });

  server.listen(PORT, () => {});
}

module.exports = {
  createServer,
};
