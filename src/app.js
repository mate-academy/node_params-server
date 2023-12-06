/* eslint-disable no-console */
'use strict';

const { createServer } = require('./server');
const PORT = process.env.PORT || 5700;

createServer()
  .listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

/**
 * Implement sum function:
 *
 * Function takes 2 numbers and returns their sum
 *
 * sum(1, 2) === 3
 * sum(1, 11) === 12
 *
 * @param {number} a
 * @param {number} b
 *
 * @return {number}
 */
// function sum(a, b) {
//   // write code here
//   return a + b;
// }

// module.exports = sum;
