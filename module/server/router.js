var events = require("events");
var eventEmit = new events.EventEmitter();

eventEmit.on("/test", function () {
    return "test"
})


function route(pathname) {
    console.log("the router" + pathname);
    if (require('events').EventEmitter.listenerCount(eventEmit, pathname) > 0) {
        console.log("events started");
        return eventEmit.emit(pathname)
    } else {
        return "not found"
    }

}

exports.route = route;
