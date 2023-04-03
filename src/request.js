'use strict';
/* eslint-disable no-console */

const axios = require('axios');

const request = (url) => {
  axios
    .get(url)
    .then(({ data }) => console.log(data));
};

module.exports = { request };
