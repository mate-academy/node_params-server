/* eslint-disable no-console */
'use strict';

const axios = require('axios');
const pathname = '/hello/world/123';
const search = '?x=1&search=some';

const BASE = 'http://localhost:3000';

const href = BASE + pathname + search;

axios.get(href)
  .then((data) => console.log(data))
  .catch(() => console.log('Error occurred'));
