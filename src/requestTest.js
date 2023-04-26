/* eslint-disable no-console */
'use strict';

const axios = require('axios');

const BASE_URL = 'http://localhost:8080';
const pathname = '/hello/world/123';
const search = '?x=1&search=some';

const href = BASE_URL + pathname + search;

axios.get(href)
  .then((data) => console.log(data.data))
  .catch(() => console.log('Error'));
