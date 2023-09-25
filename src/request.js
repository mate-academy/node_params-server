/* eslint-disable no-console */
'use strict';

const axios = require('axios');

const BASE = 'http://localhost:3006';

const href = BASE
+ '/hello/world/123'
+ '?x=1&search=some';

axios.get(href)
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  });
