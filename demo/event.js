var events = require("events");

/**
 * 创建对应的
 * @type {events.EventEmitter}
 */
var eventEmitter = new events.EventEmitter();

var eventHandler = function connected() {
    console.log("connected success");

    eventEmitter.emit('data_received');
};


eventEmitter.on('connection', eventHandler);


var data_received = function () {
    console.log("data received");
};
eventEmitter.on('data_received', data_received);

eventEmitter.on('data_received', function () {
    console.log("data1 received");
});

//eventEmitter.removeListener('data_received', data_received);
eventEmitter.emit('connection');

eventEmitter.addListener('data_received', data_received);

//注意对应的eventEmitter需要重新去new
var count = require('events').EventEmitter.listenerCount(eventEmitter, 'data_received');
console.log("事件个数:" + count);

eventEmitter.emit('data_received');
console.log("down!!!!");


// eventEmitter.on('error', function () {
//     console.log("error")
// });
//
// eventEmitter.on("test", function () {
//     throw e
// });

eventEmitter.emit('error');
