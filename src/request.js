const axios = require('axios');

const BASE_URL = 'http://localhost:8080';
const parts = `/hello/world/123`;
const query = 'x:1&search:some';

const href = BASE_URL + parts + '?' + query;

axios.get(href)
// eslint-disable-next-line no-console
  .catch(() => console.log('Something goes wrong'));
