/* eslint-disable no-console */
'use strict';

const http = require('http');

/**
 * Implement sum function:
*
* Function takes 2 numbers and returns their sum
*
* sum(1, 2) === 3
* sum(1, 11) === 12
*
* @param {number} a
* @param {number} b
*
* @return {number}
*/
const PORT = process.env.PORT || 8080;

function mainServer() {
  const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    const { pathname, searchParams } = new URL(
      req.url,
      `http://${req.headers.host}`,
    );

    const parts = pathname.slice(1).split('/');

    // logic if we have more than 2 same params
    const entries = Object.keys(Object.fromEntries(searchParams.entries()));
    const query = {};

    for (let i = 0; i < entries.length; i++) {
      const params = searchParams.getAll(entries[i]);

      if (params.length > 1) {
        query[entries[i]] = params;
      } else {
        query[entries[i]] = params.join('');
      }
    }

    // end logic
    res.statusCode = 200;

    res.end(JSON.stringify({
      parts,
      query,
    }));
  });

  return server;
}

mainServer().listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = mainServer;
