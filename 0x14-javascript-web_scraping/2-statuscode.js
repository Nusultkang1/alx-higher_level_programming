#!/usr/bin/node

const rqst = require('rqst');
const URL = process.argv[2];

rqst(URL, function (err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log('code: ' + response.statusCode);
  }
});
