'use strict';

function prepareResponse(request) {
  const [rawParts, rawQuery] = request.url.split('?');

  const response = {
    parts: rawParts.slice(1).split('/').filter(Boolean),
    query: Object.fromEntries(new URLSearchParams(rawQuery)),
  };

  return JSON.stringify(response);
}

module.exports = {
  prepareResponse,
};
