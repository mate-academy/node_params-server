'use strict';
/* eslint-disable no-console */

const axios = require('axios');

axios.get('http://localhost:3000/hello/world/123?x=1&search=some')
  .then(res => {
    console.log(res.status);

    console.log(res.data);
  })
  .catch(error => {
    console.log(error);
  });
