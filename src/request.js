/* eslint-disable no-console */
'use strict';

const axios = require('axios');

const url = '//hello/world/?x=1&search=some';

async function request(testUrl = url) {
  try {
    const res = await axios.get('http://localhost:5700' + testUrl);
    const data = res.data;
    const headers = res.headers;
    const response = [ data, headers ];

    return response;
  } catch (err) {
    console.log(err);
  }
}

// const dataFromRequest = async() => {
//   const data = await request();

//   console.log(data);
// };

// dataFromRequest();

module.exports = { request };
