/* eslint-disable no-console */
/* Don't change code below */

'use strict';

const { createServer } = require('./createServer');
const axios = require('axios');
const PORT = process.env.PORT || 5700;

const server = createServer();

server.listen(PORT);

axios
  .get(`http://localhost:${PORT}/hello/world/123?x=1&search=some`)
  .then((response) => {
    console.log('GET response:', response.data);
  })
  .catch((error) => {
    console.error('Error during GET request:', error.message);
  });
