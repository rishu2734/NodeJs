var fs = require('fs');

fs.unlink('file1.txt', function(err){
	if(err){
		throw err;
	}
	console.log('this is the log message');
});