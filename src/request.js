/* eslint-disable no-console */
'use strict';

const axios = require('axios');

axios.get('http://localhost:3000/users/3/friend?sex=m&age=25&married=true')
  .catch(error => {
    console.log(error);
  });
