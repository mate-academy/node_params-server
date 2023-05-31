/* eslint-disable no-console */
'use strict';

const axios = require('axios');

const BASE = 'http://localhost:3000';
const pathName = '/hello/world/123';
const search = '?x=1&search=some';

const href = BASE + pathName + search;

console.log(href);

axios.get(href).catch(() => console.log('error'));
