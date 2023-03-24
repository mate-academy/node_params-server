/* eslint-disable no-console */
'use strict';

const axios = require('axios');

const BASE = 'http://localhost:3000';
const pathName = '/users/something';
const search = '?serach&something=21';

axios.get(BASE + pathName + search)
  .catch(() => console.log('error'));
