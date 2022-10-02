'use strict';
/* eslint-disable no-console */

const axios = require('axios');
const BASE_URL = 'http://localhost:3000';
const pathname = '/hello/world/123?x=1&search=some';

axios.get(`${BASE_URL}${pathname}`)
  .then(res => console.log(res.data))
  .catch(console.error);
