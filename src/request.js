/* eslint-disable no-console */
import axios from 'axios';

const PORT = process.env.PORT || 3000;

const href = `http://localhost:${PORT}/hello/world/123?x=1&search=some`;

axios.get(href);
