'use strict';

const axios = require('axios');

const BASE = 'http://localhost:8080/hello/world/123?x=1&search=some';

axios.get(BASE)
  .catch(() => {
    console.log('Error occurred');
  });
