'use strict';

const axios = require('axios');

const BASE = `http://localhost:8080`;
const pathname = '/hello/world/123';
const query = '?x=1&search=some';

const href = BASE + pathname + query;

axios.get(href)
  .catch(er => {
    // eslint-disable-next-line no-console
    console.log(er);
  });
