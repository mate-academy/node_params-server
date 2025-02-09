const http = require('node:http');

function createServer() {
  return http.createServer(function (req, res) {
    const myUrl = new URL(req.protocol + '://' + req.headers.host + req.url);

    const parts = myUrl.pathname.split('/').filter(function (part) {
      return part !== '';
    });

    const query = {};

    new URLSearchParams(myUrl.searchParams).forEach(function (val, key) {
      query[key] = val;
    });

    res.setHeader('content-type', 'application/json');
    res.statusCode = 200;

    res.end(JSON.stringify({ parts, query }));
  });
}

module.exports = {
  createServer,
};
