var fs = require('fs');

fs.writeFile('file1.txt', 'this is the new content', function(err){
	if(err){
		throw err;
	}
	console.log('this is the log message');
});