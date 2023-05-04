'use strict';

const axios = require('axios');

const baseUrl = 'http://localhost:5001/hello/world/123?x=1&search=some';

axios
  .get(baseUrl)
  .then((res) => {
    return res.status;
  })
  .catch((error) => {
    return error;
  });
