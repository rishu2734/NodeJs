var fs = require('fs');
var rs = fs.createReadStream('./file1.txt');
rs.on('open', function () {
  console.log('The file is open');
});