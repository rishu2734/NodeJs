var http = require('http');
var fs = require('fs');

var server = http.createServer();
server.on("request", function(req,res){
    var rstream = fs.createReadStream("file.txt");
    rstream.pipe(res);
});

server.listen(8080);