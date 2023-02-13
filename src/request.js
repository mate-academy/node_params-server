'use strict';

const axios = require('axios');

const BASE_URL = 'http://localhost:8080';
const pahtname = '/hello/world/123';
const query = '?x=1&search=some&search=one';

const href = BASE_URL + pahtname + query;

axios.get(href);
