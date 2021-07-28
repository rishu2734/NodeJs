var event = require('events');
var eventEmitter = new event.EventEmitter();

eventEmitter.on('myevent', function(status,msg){
    console.log(`My website status code is ${status} and the message is ${msg}`);
});

eventEmitter.emit('myevent', 200, 'OK');
