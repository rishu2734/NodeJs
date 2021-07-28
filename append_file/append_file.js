var fs = require('fs');

fs.appendFile('file1.txt', 'this is the content of file', function(err){
	if(err){
		throw err;
	}
	console.log('this is log message');
});