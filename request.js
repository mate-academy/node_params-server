const axios = require('axios');

axios
  .get('http://localhost:5701/hello/world/123?x=1&search=some')
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error.message);
  });
