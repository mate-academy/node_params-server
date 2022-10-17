/* eslint-disable no-console */
'use strict';

const axios = require('axios');

const BASE = 'http://localhost:8080';
const pathname = '/hello/world/123';
const search = '?x=1&search=some';

const href = BASE + pathname + search;

axios.get(href)
  .catch(() => console.log('Something goes wrong'));
