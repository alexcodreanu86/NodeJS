"use strict";
const 
  fs = require('fs'),
  spawn = require('child_process').spawn,
  fileName = process.argv[2];

if (!fileName) {
  throw Error("A file to watch must be specified!");
};

fs.watch(fileName, function() {
  let ls = spawn('ls', ['-lh', fileName]);
  ls.stdout.pipe(process.stdout);
});

console.log ("Now watching " + fileName + "for changes...");