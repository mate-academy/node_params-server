'use strict';

const axios = require('axios');

const BASE = 'http://localhost:3000';
const part = '/hello/world/123';
const query = '?x=1&search=some';

const href = BASE + part + query;

axios.get(href)
  // eslint-disable-next-line no-console
  .catch(() => console.log('Error occured'));
