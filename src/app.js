'use strict';

const http = require('http');
const PORT = process.env.PORT || 5700;

const server = http.createServer((request, response) => {
  const normalizedUrl = new URL(request.url, `http://${request.headers.url}`);

  const splitedUrl = normalizedUrl.split('?');
  const parts = splitedUrl[0].split('/');
  const query = Object.fromEntries(
    normalizedUrl.searchParams.entries(),
  );
  const result = {};

  if (parts) {
    result.parts = parts;
  };

  if (query) {
    result.query = query;
  };

  if (Object.keys(result).length > 0) {
    response.setHeader('Content-Type', 'application/json');
    response.statusCode = 200;
    response.statusMessage = 'OK';

    response.end(JSON.stringify(result));
  } else {
    response.statusCode = 400;
    response.end(JSON.stringify({
      message: 'Invalid URL',
    }));
  };
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Server started! 🚀');
});
