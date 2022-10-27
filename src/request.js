const axios = require('axios');

const BASE_URL = 'http://localhost:8080';
const pathname = '/hello/world/123';
const searchParam = 'x:1&search:some';

const href = BASE_URL + pathname + '?' + searchParam;

axios.get(href)
// eslint-disable-next-line no-console
  .catch(() => console.log('Error'));
