'use strict';
/* eslint-disable no-console */

const axios = require('axios');
const { serverLink } = require('./serverSetup');

function createRequest() {
  const path = '/hello/world/123';
  const query = '?x=1&search=some';
  const preparedLink = serverLink + path + query;

  axios.get(preparedLink)
    .then(res => {
      console.log(res.headers);
      console.log(res.data);
    });
}

createRequest();
