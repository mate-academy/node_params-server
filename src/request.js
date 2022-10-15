/* eslint-disable no-console */
import axios from 'axios';

const BASE = 'http://localhost:8080';
const pathname = '/hello/world/123';
const search = '?x=1&search=some';

const href = BASE + pathname + search;

console.log(href);

axios.get(href)
  .catch(() => console.log('Error'));
