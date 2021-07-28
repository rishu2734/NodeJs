var events = require('events');
var eventEmitter = new events.EventEmitter();

var myEventHandler = function(){
	console.log('I heared my own created scream event');
}

eventEmitter.on('scream',myEventHandler);
eventEmitter.emit('scream');