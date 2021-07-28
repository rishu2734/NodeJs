var event = require('events');
var eventEmitter = new event.EventEmitter();

eventEmitter.on('myevent', function(){
    console.log('This is my event work1');
    console.log();
});

eventEmitter.on('myevent', function(){
    console.log('This is my event work2');
    console.log();
});

eventEmitter.on('myevent', function(){
    console.log('This is my event work3');
    console.log();
});

eventEmitter.on('myevent', function(){
    console.log('This is my event work4');
    console.log();
});

eventEmitter.emit('myevent');