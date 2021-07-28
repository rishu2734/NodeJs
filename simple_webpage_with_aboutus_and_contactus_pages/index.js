var http = require('http');

http.createServer(function(req,res){
    //console.log(req.url);
    if(req.url == '/'){
        res.end('This is HOME page');
    }
    else if(req.url == '/aboutus'){
        res.end('This is ABOUT US page');
    }
    else if(req.url == '/contactus'){
        res.end('This is CONTACT US page');
    }
    else{
        res.writeHead(404);
        res.write('404 ERROR!.....page does not exist');
        res.end();
    }

}).listen(8080,function(){
    console.log('Listening to the server 8080.');
});