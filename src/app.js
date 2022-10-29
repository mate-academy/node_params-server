'use strict';

const http = require('http');

// Get port from env or use default:
const PORT = process.env.PORT || 8000;

const server = http.createServer((request, response) => {
  // We'll answer only on requests with a 'text/html' accept header:
  if (request.headers.accept.includes('text/html')) {
    // Reconstruct URL to avoid using url module...well...
    const url = new URL(
      request.url, request.protocol + '://' + request.headers.host + '/'
    );
    const urlQuery = new URLSearchParams(url.search);
    const query = {};

    // Get search params from URL and convert it to object:
    for (const [key, value] of urlQuery.entries()) {
      query[key] = value;
    }

    // Return JSON with all required data:
    response.end(JSON.stringify({
      'parts': url.pathname.split('/').slice(1),
      query,
    }));
  }
});

// Server listener and message with info:
server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Server is running on: http://localhost:' + PORT);
});
