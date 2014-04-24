const fs = require('fs'),
      fileName = process.argv[2];

if (!fileName) {
  throw Error("A file to watch must be specified!");
};

fs.watch(fileName, function() {
  console.log("File '" + fileName + "' just changed!");
});

console.log("Now watching " + fileName + " for changes...");