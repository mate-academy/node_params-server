'use strict';

function convertPathName(params) {
  let requestText = params;

  if (requestText.startsWith('/')) {
    requestText = requestText.slice(1);
  }

  if (requestText.endsWith('/')) {
    requestText = requestText.slice(0, -1);
  }

  requestText = requestText.split('/');

  const parts = requestText.length === 1 ? requestText[0] : requestText;

  return parts;
}

module.exports = { convertPathName };
