const axios = require('axios');

const PORT = process.env.PORT || 5701;
const BASE_URL = `http://localhost:${PORT}`;
const parts = '/hello/world/123';
const query = 'x=1&search=some';
const href = `${BASE_URL}/${parts}?${query}`;

axios
  .get(href)
  .then((response) => {
    // eslint-disable-next-line no-console
    console.log('Response:', response.data);
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.log('Error:', err.response ? err.response.data : err);
  });
