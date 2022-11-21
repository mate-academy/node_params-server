'use strict';
/* eslint-disable max-len */

const { Server } = require('http');
const { request } = require('../src/request');
const { expect } = require('expect');

describe('createServer', () => {
  let createServer;

  before(() => {
    createServer = require('../src/createServer').createServer;
  });

  describe('basic scenarios', () => {
    it('should create a server', () => {
      expect(createServer)
        .toBeInstanceOf(Function);
    });

    it('should create an instance of Server', () => {
      expect(createServer())
        .toBeInstanceOf(Server);
    });
  });

  describe('Server', () => {
    let server;

    function listen(port) {
      return new Promise((resolve) => {
        server.listen(port, () => {
          resolve();
        });
      });
    }

    before(async() => {
      server = createServer();

      await listen(5700);
    });

    after(() => {
      server.close();
    });

    describe('Response', () => {
      const cases = [
        '/hello/world/123?x=1&search=some',
        '/hello/world/123?x=1&search=some&x=2',
        '/am/world/3?lint=never&x=1&search=some&x=2&lint=all',
        '/kata/latest/my-languages?q=&r%5B%5D=-8',
        '/kata/search/my-languages?q=&r%5B%5D=-8&r%5B%5D=-7&r%5B%5D=-6&r%5B%5D=-5&r%5B%5D=-4&order_by=sort_date%20desc'
      ];

      const response = [
        {
          parts: ["hello", "world", "123"],
          query: {
            x: "1",
            search: "some"
          }
        },
        {
          parts: ["hello", "world", "123"],
          query: {
            x: ["1", "2"],
            search: "some"
          }
        },
        {
          parts: ["am", "world", "3"],
          query: {
            x: ["1", "2"],
            search: "some",
            lint: ["never", "all"]
          }
        },
        {
          parts: [ 'kata', 'latest', 'my-languages' ],
          query: {
            q: '',
            'r[]': '-8'
          }
        },
        {
          parts: [ 'kata', 'search', 'my-languages' ],
          query: {
            q: '',
            'r[]': [ '-8', '-7', '-6', '-5', '-4' ],
            order_by: 'sort_date desc'
          }
        }
      ]

      for (let i = 0; i < cases.length; i++) {
        it(`should convert url ${cases[i]} to an object`, async() => {
          const data = await request(cases[i]);

          expect(data[1]['content-type'])
            .toEqual('application/json');

          expect(data[0])
            .toEqual(response[i]);
        });
      }
    });
  });
});
