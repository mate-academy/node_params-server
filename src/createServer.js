const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    // Use URL to parse the request URL
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);

    // Normalize pathname and split it into parts
    const parts = parsedUrl.pathname.split('/').filter(Boolean);

    // Handle query parameters, ensuring empty ones are not omitted
    const query = {};

    parsedUrl.searchParams.forEach((value, key) => {
      // If the parameter is empty, we still want it to be included in the query
      query[key] = value || ''; // Ensure even empty values are present
    });

    // Construct the response JSON
    const responseData = { parts, query };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(responseData));
  });
}

module.exports = {
  createServer,
};
