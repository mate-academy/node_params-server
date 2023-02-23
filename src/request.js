/* eslint-disable no-console */

// this file is created to check whether app works
'use strict';

const axios = require('axios');

const BASE = 'http://localhost:3000';
const pathname = '/hello/world/123';
const search = '?x=1&search=some&x=4';

axios.get(BASE + pathname + search)
  .catch(() => console.log('Error'));
