/* eslint-disable no-console */
'use strict';

const http = require('http');
const url = require('url');

/**
 * Creates and returns an HTTP server that echoes URL parts and query params.
 * @returns {http.Server} The configured HTTP server.
 */
function createServer() {
  const server = http.createServer((req, res) => {
    // Встановлюємо заголовок Content-Type для JSON
    res.setHeader('Content-Type', 'application/json');

    // Парсимо URL
    // eslint-disable-next-line node/no-deprecated-api
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    // Отримуємо частини шляху, ігноруючи дубльовані слеші
    const parts = pathname.split('/').filter((part) => part.length > 0);

    // Отримуємо об'єкт з параметрами запиту (query)
    const query = parsedUrl.query;

    // Формуємо відповідь
    const response = {
      parts,
      query,
    };

    // Повертаємо 200 OK з JSON-відповіддю
    res.writeHead(200, 'OK');
    res.end(JSON.stringify(response));
  });

  return server;
}

module.exports = {
  createServer,
};
