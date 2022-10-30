/* eslint-disable no-console */
'use strict';

const axios = require('axios');

const BASE = 'localhost:8080';
const path = '/hello/world/123';
const params = '?x=1&search=some';

axios.get(`http://${BASE}${path}${params}`)
  .then(res => console.log(res.data))
  .catch(error => console.error(error));
