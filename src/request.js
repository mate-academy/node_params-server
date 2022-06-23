'use strict';

const axios = require('axios');

const BASE = `http://localhost:8080`;
const parthname = '/hello/world/123';
const search = `?x=1&search=some`;

const href = BASE + parthname + search;

axios.get(href)
  .catch(() => {
  // eslint-disable-next-line no-console
    console.log('Error occurred');
  });
