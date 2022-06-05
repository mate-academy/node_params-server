/* eslint-disable no-console */
'use strict';

const axios = require('axios');

axios.get('http://localhost:8080/name/search?age=35')
  .then(res => {
    console.log(res.data);
  })
  .catch(err => {
    console.log(err);
  });
