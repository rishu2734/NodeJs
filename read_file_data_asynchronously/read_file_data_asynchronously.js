var fs = require('fs');

fs.readFile('file1.txt', 'UTF-8', function(err,data){
    if(err) throw err;
    console.log(data);
});
console.log('this is 2nd data of which will get read this will take less time then my 1st data.');