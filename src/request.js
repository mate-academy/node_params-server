/* eslint-disable no-console */
'use strict';

const axios = require('axios');

const BASE = 'http://localhost:8080';
const pathname = '/hello/world/123';
const search = '?x=1&search=some';

const href = BASE + pathname + search;

axios.get(href)
  .then(response =>
    console.log('Response data: ', JSON.stringify(response.data, null, 2))
  )
  .catch(() => console.error('error'));
