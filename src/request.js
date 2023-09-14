/* eslint-disable no-console */
'use strict';

const axios = require('axios');

const BASE = 'http://localhost:8080' + '/hello/world/123?x=1&search=some';
const href = BASE;

console.log(href);

axios.get(href)
  .catch(err => console.log(err));
