'use strict';
/* eslint-disable no-console */

const axios = require('axios');

const BASE = 'http://localhost:3000';
const pathname = '/users/45/friends';
const search = '?sex=f&page=30';

const href = BASE + pathname + search;

axios.get(href)
  .catch(() => console.log('error'))
  .then((data) => console.log(data));
