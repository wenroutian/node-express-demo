var http = require("http");
var url = require("url");

function start(route) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("request for " + pathname + "received");
        var  res = route(pathname)
        response.writeHead(200,{"Content-Type":"application/json"});
        response.write(res);
        response.end();
    }
    http.createServer(onRequest).listen(8888)
    console.log("server start");
}

exports.start = start