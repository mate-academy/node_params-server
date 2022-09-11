'use strict';

/* eslint-disable no-console */
const axios = require('axios');

axios.get('http://localhost:8080/hello/world/123?x=1&search=some')
  .catch(() => console.log('Error'));
