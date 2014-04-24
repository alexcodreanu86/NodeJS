const fs = require('fs'),
      fileName = "target.txt";

var readTheFile = function(){
  var text;
  fs.readFile(fileName, function(err, data){
    if (err){ throw err;}
    text = data.toString();
  })
  return text;
}

var writeToFile = function(text){
  var length = text.length
  text = text + "\nAt the time of writing the file had " + length + " characters!!!"
  fs.writeFile(fileName, text, function(err){
    if (err){
      throw err;
    }
  })
}

fs.watch(fileName, function(){
  currentText = readTheFile();
  writeToFile(currentText);
  console.log("File updated!")
})

console.log("Watching changes in file " + fileName)