var uc = require('upper-case');
var http = require('http');

http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write(uc.upperCase('hellow world in upper case'));
	res.end();
	console.log('program runned correctly');
}).listen(8080);