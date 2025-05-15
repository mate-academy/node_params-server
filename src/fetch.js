/* eslint-disable no-console */
// Client Example
const axios = require('axios');

const BASE = 'http://localhost:5700';
const href = BASE;
// + '/hello/world/123?x=1&search=home&x=';

axios
  .get(href)
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));
