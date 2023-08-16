/* eslint-disable no-console */
'use strict';

const axios = require('axios');

axios.get('http://localhost:3000/hello/world/123?x=1&search=some')
  .then(res => console.log(res.data, 'res'))
  .catch(err => console.log(err.statusCode));
