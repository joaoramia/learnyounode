var http = require('http');
var bl = require('bl');
var results = []; 
var count = 0;

function logResults () {
  for (var i = 0; i < 3; i++) {
    console.log(results[i]);
  }
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        throw err;
      }
      else {
        results[index] = data.toString();
        count++;
      }
      if (count == 3) {
        logResults();
      }
    }))
  })
}

for (var i = 0; i < 3; i++) {
  httpGet(i);
}
