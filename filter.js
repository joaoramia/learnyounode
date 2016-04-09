var fs = require('fs');

var path = require('path');

var filePath = process.argv[2];

var ext = process.argv[3];

fs.readdir(filePath, function(err, list){
  for (var j = 0; j < list.length; j++){
    if (path.extname(list[j]) == '.' + ext){
      console.log(list[j]);
    }
  }
});
