var httpserver = require('http');

httpserver.createServer(function(req,res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('HELLO, MY NAME IS RISHABH GUPTA and I AM 22 YEARS OLD');
	res.write(req.url);
	res.write('HELLO, MY NAME IS RISHABH GUPTA and I AM 22 YEARS OLD');
	res.end();
}).listen(8080);