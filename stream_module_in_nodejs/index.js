var http = require('http');
var fs = require('fs');

var server = http.createServer();
server.on("request", function(req,res){
    var rstream = fs.createReadStream("file.txt");
    rstream.on('data', function(chunkdata){
        res.write(chunkdata);
    });
    rstream.on('end', function(chunkdata){
        res.end();
    });
    rstream.on('error', function(chunkdata){
        console.log(err);
        res.write("File Not Found");
    });
});

server.listen(8080);
