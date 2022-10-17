'use strict';

const axios = require('axios');
const BASE = 'http://localhost:8080';
const parts = '/hello/world/123';
const query = '?x=1&search=some';
const href = BASE + parts + query;

axios.get(href)
  .catch(() => {
    // eslint-disable-next-line no-console
    console.log('Error occured');
  });
