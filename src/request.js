/* eslint-disable no-console */
'use strict';

const axios = require('axios');

const BASE = 'http://localhost:8000';
const pathname = '/user/banana/apple?count=3&tree=yellow&tree=green';

const href = BASE + pathname;

axios.get(href)
  .then(data => console.log(data.data));
