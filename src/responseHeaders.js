'use strict';

function onResponseOk(res) {
  res.setHeader('content-type', 'application/json');
  res.setHeader('Message', 'Ok');
  res.setHeader('StatusCode', 200);
}

function onResponseDenied(res) {
  res.setHeader('content-type', 'application/json');
  res.setHeader('status', 'Access Denied');
  res.setHeader('StatusCode', 403);
  res.setHeader('message', 'You used wrong method');
}

module.exports = {
  onResponseOk,
  onResponseDenied,
};
