#!/usr/bin/node

const fnc = require('fnc');
const file = process.argv[2];
const string = process.argv[3];

fnc.writeFile(file, string, 'utf-8', function (err) {
  if (err) console.log(err);
});
