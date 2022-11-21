/* eslint-disable no-console */
/* eslint-disable max-len */
'use strict';

const axios = require('axios');

const url = '/kata/search/my-languages?q=&r%5B%5D=-8&r%5B%5D=-7&r%5B%5D=-6&r%5B%5D=-5&r%5B%5D=-4&order_by=sort_date%20desc';

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

const dataFromRequest = async() => {
  const data = await request();

  console.log(data);
};

dataFromRequest();

module.exports = { request };
