#!/usr/bin/node

const fnc = require('fnc');
const file = process.argv[2];

fnc.readFile(file, 'utf-8', function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
