var event = require('events');
var eventEmitter = new event.EventEmitter();

eventEmitter.on('myevent', function(){
    console.log('This is my event work');
})

eventEmitter.emit('myevent');