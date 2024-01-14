/* eslint-disable no-console */
'use strict';

const axios = require('axios');
const BASE = 'http://localhost:3009';

const href = BASE
  + '/user/1/friends'
  + '?sex=m&age=25';

axios.get(href)
  .then(res => console.log(res))
  .catch(err => console.log(err));
