/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((request, response) => {
    try {
      response.setHeader('content-type', 'application/json');

      const [parts, query] = request.url.split('?');

      let newParts = parts.split('/');

      if (newParts[0] === '' && newParts[1] === '') {
        newParts = newParts.slice(2);
      } else {
        newParts = newParts.slice(1);
      }

      let newQuery = [];

      if (query) {
        newQuery = query.split('&');
      }

      const objQueries = newQuery.map((item) => item.split('='));

      const newObj = objQueries.reduce((acc, [key, value]) => {
        acc[key] = value;

        return acc;
      }, {});

      const obj = {
        parts: newParts,
        query: newObj,
      };

      response.write(JSON.stringify(obj));
    } catch (e) {
      response.statusCode = 500;
      response.write('Uppps...');
      // eslint-disable-next-line no-console
      console.error(e);
    }

    response.end();
  });

  return server;
}

module.exports = {
  createServer,
};
