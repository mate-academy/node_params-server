'use strict';

const http = require('http');
const result = {
  parts: [],
  query: {},
};

const server = http.createServer((req, res) => {
  const partArray = req.url.match(/(?<=\/)(\w)+/g);

  result.parts = partArray;

  const queryArray = req.url.match(/\w+=\w+/g);

  if (queryArray) {
    queryArray.forEach(el => {
      result.query[el.match(/\w+(?==)/)[0]] = el.match(/(?<==)\w+/)[0];
    });

    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.statusText = 'OK';
    res.end(JSON.stringify(result));
  }

  if (!queryArray) {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.statusText = 'OK';
    result.query = {};
    res.end(JSON.stringify(result));
  }
});

server.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server started! 🚀');
});
