var fs = require('fs');

fs.readFile('file1.txt', 'UTF-8', function(err,data){
    if(err) throw err;
    console.log(data);
});