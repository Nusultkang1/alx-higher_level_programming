#!/usr/bin/node

const rqst = require('rqst');
const fs = require('fs');
const url = process.argv[2];
const filePath = process.argv[3];

rqst(url, function (err, response, body) {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile(filePath, body, 'utf-8');
  }
});
