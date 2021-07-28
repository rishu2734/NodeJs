var http = require('http');

var result = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('Hello This is Rishabh Gupta');
    res.end('This is end line');
});

result.listen(8080, function(){
    console.log('Now, server is started on 8080 port number.');
});