'use strict';
/* eslint-disable */
const axios = require('axios');

const BASE_URL = 'http://localhost:3000';
const href = BASE_URL + '/hello/world/123?x=1&search=some';

axios.get(href)
  .then(res => console.log(res.data))
  .catch(err => console.log(err));
