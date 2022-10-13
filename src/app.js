/* eslint-disable no-console */
'use strict';

const http = require('http');
const fs = require('fs');
const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  const normalizedURL = new URL(req.url, `http://${req.headers.host}`);

  if (normalizedURL.pathname !== '/favicon.ico') {
    const response = {
      paths: normalizedURL.pathname.split('/').slice(1),
      query: Object.fromEntries(normalizedURL.searchParams.entries()),
    };

    console.log(response);
    res.write(`\n${JSON.stringify(response)}`);

    fs.writeFile(`./src/response${new Date()
      .toLocaleTimeString().split(':').join('')}.json`,
    JSON.stringify(response), (er) => {
      if (er) {
        console.log('Error occured');
      }
    });
  }

  res.end();
});

server.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
