/* eslint-disable no-console */
'use strict';
console.clear();

const axios = require('axios');

axios.get('http://localhost:8080/hello/world/123?x=1&search=some')
  .then(res => console.log(res.data))
  .catch(er => console.log('Error occured'));
