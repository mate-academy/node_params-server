/* eslint-disable no-console */
'use strict';

const axios = require('axios');

const pathname = '';
const search = '';

const BASE = 'http://localhost:8080';

const href = BASE + pathname + search;

console.log(href);

axios.get(href)
  .catch(() => console.log('Error occurred'));
