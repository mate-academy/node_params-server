/* eslint-disable no-console */
'use strict';

const { request } = require('./request');
const { server } = require('./server');

const BASE = 'http://localhost';
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on ${BASE}:${PORT}\n`);
});

const parts = '/foo/bar/baz';
const query = 'one=1&two=2&three=3';

request(`${BASE}:${PORT}${parts}?${query}`);
