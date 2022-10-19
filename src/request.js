/* eslint-disable no-console */
'use strict';

const axios = require('axios');

const href = 'http://localhost:8080';
const pathname = '/hello/world/123';
const search = '?x=1&search=some';

axios.get(href + pathname + search)
  .then(res => console.log(res.data))
  .catch(error => {
    console.log(error);
  });
