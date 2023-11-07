/* eslint-disable no-console */
'use strict';

const axios = require('axios');

const BASE_URL = 'http://localhost:3006';

const href = BASE_URL + '/hello/world/123?x=1&search=some';

axios.get(href)
  .then(data => console.log(data))
  .catch(err => console.log(err));
